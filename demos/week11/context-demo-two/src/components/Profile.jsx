'use client'
import ProfileForm from "./ProfileForm";
import ProfileLayout from "./ProfileLayout";
import { useContext } from "react";
import { UserContext } from "@/UserContext";

export default function Profile() {
    const user = useContext(UserContext)

    // console.log(user)
    return (
        <div>
            <ProfileLayout>
                <p>{user} is the user on the site! This profile component needs to know who that is.</p>
                <ProfileForm />
            </ProfileLayout>
        </div>
    )
}