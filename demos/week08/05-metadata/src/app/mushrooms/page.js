import Link from "next/link";
import { mushrooms } from "@/stores/mushrooms";

// next js is really clever, and if it sees that you're exporting metadata, it will apply that metadata to this page!
export const metadata = {
    title: 'All Mushrooms',
    description: 'All the mushrooms in the world, learn interesting facts about mushrooms like shiitake and morel and blah blah | Sams Mushroom Tracker',
    openGraph: {
        title: 'All Mushrooms | Sams Mushroom Tracker',
        image: ['']
    }
}

export default function MushroomPage() {
    return (
        <div>
            {mushrooms.map(mushroom => (
                <div>
                    <Link href={`mushrooms/${mushroom.slug}`}>
                        <img src={mushroom.image} />
                        <h3>{mushroom.slug}</h3>
                    </Link>
                </div>
            ))}
        </div>
    )
}