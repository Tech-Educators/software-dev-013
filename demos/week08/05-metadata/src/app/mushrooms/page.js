import Link from "next/link";
import { mushrooms } from "@/stores/mushrooms";

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