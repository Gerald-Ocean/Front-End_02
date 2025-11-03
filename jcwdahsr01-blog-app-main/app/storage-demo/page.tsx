'use client'
import { useState, useEffect } from "react"
import Cookies from 'js-cookie'

export default function StorageDemo() {
    const [input, setInput] = useState<string>("")
    const [cookieValue, setCookieValue] = useState<string>("")
    const [cookieExpiry, setCookieExpiry] = useState<string>("")
    const [sessionValue, setSessionValue] = useState<string>("")
    const [localValue, setLocalValue] = useState<string>("")

    useEffect(() => {
        const cookieData = Cookies.get('demoData')
        const cookieExpiry = Cookies.get('demoExpiry')
        const sessioData = sessionStorage.getItem('demoData')
        const localData = localStorage.getItem('demoData')

        setCookieValue(cookieData!)
        setCookieExpiry(cookieExpiry!)
        setSessionValue(sessioData!)
        setLocalValue(localData!)
    }, [])

    function clearData() {
        Cookies.remove('demoData')
        Cookies.remove('demoExpiry')
        localStorage.removeItem('demoData')
        sessionStorage.removeItem('demoData')

        setCookieValue('')
        setCookieExpiry('')
        setLocalValue('')
        setSessionValue('')
    }


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        // set cookies (expired dalam 1 menit)
        const expiryDate = new Date(Date.now() + 60 * 1000) // 1 menit dari sekarang
        Cookies.set('demoData', input, { expires: expiryDate })
        Cookies.set('demoExpiry', expiryDate.toISOString())

        // set session dan local
        sessionStorage.setItem('demoData', input)
        localStorage.setItem('demoData', input)

        // update state tampilan
        setCookieValue(input)
        setCookieExpiry(expiryDate.toISOString())
        setLocalValue(input)
        setSessionValue(input)
        setInput("")
    }

    return (
        <div className="min-h-screen bg-violet-100 flex flex-col items-center justify-center p-6 text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-violet-700">Storage Demo</h1>
            <form
                onSubmit={handleSubmit}
                className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Type something ..."
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    className="border border-violet-600 rounded px-3 py-2 focus:outline-none focus:ring-2"
                />
                <button type="submit" className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700">Save</button>
                <button onClick={clearData} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Clear</button>
            </form>
            <div className="flex flex-col justify-start items-start space-y-5">
                <div>
                    <h2 className="font-semibold text-violet-700">Cookies</h2>
                    <p className="text-gray-700">Value : {cookieValue} </p>
                    <p className="text-gray-700">Expires at : {cookieExpiry} </p>
                </div>
                <div>
                    <h2 className="font-semibold text-violet-700">Local Storage</h2>
                    <p className="text-gray-700">Value : {localValue} </p>
                    <p className="text-gray-700">Expires at : Permanent, must be deleted by trigger </p>
                </div>
                <div>
                    <h2 className="font-semibold text-violet-700">Session Storage</h2>
                    <p className="text-gray-700">Value : {sessionValue} </p>
                    <p className="text-gray-700">Expires at : Only 1x time tab </p>
                </div>
            </div>

        </div>
    )
}
