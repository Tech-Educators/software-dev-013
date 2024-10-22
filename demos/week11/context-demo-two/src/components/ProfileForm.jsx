import AvatarDisplay from "./AvatarDisplay";

export default function ProfileForm() {
    return (
        <div>
            <p>This is the profile form component. It doesn't need to know the user, but we have to pass it so the avatar can know the user. (Even though avatar display also doesn't need to know it!) </p>
            <AvatarDisplay />

        </div>
    )
}