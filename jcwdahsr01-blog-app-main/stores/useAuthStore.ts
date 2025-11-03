'use client'
import { create } from 'zustand'
import Backendless from '@/lib/backendless'

interface AuthUser {
    objectId: string
    email: string
    name?: string
}

interface AuthStore {
    user: AuthUser | null
    loading: boolean
    error: string | null
    register: (email: string, password: string, name: string) => Promise<void>
    login: (email: string, password: string) => void
    logout: () => Promise<void>
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    loading: false,
    error: null,
    register: async (email, password, name) => {
        set({ loading: true, error: null })
        try {
            const newUser = await Backendless.UserService.register({ email, password, name })
            console.log('Registered user : ', newUser)
        } catch (error: any) {
            set({ error: error.message })
        } finally {
            set({ loading: false })
        }
    },
    login: async (email, password) => {
        set({ loading: true, error: null })
        try {
            const user = await Backendless.UserService.login(email, password, true)
            set({ user: user as AuthUser })
            alert('Success login from zustand!')
        } catch (error: any) {
            set({ error: error.message })
        } finally {
            set({ loading: false })
        }
    },
    logout: async () => {
        await Backendless.UserService.logout()
        set({ user: null })
    }
}))
