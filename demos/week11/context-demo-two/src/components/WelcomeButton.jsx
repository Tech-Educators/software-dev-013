'use client'
import { useContext } from "react"
import { UserContext } from "@/UserContext"

export default function WelcomeButton() {
    const user = useContext(UserContext)
    return (
        <div>
            <p>Welcome to the site, {user}!</p>
        </div>
    )
}