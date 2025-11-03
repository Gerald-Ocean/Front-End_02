'use client'
import { useTheme } from "@/context/ThemeContext"

export default function Navbar() {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className="p-4 flex justify-between items-center fixed top-0 w-screen bg-white">
            <h1>My Blog App</h1>
            <button onClick={toggleTheme} className="px-3 py-2 bg-violet-500 text-white rounded-md">
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    )
}
