import { useEffect } from "react"

export default function Init({ onComplete }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete()
        }, 4000)

        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <div className="w-screen h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden font-mono">
        </div>
    )
}