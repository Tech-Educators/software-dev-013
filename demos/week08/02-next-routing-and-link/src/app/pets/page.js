import Link from "next/link";

export default function PetsPage() {

    const pets = [
        { id: 1, name: 'Darcy', bio: 'Darcy is a curious cat who loves climbing trees and chasing shadows.' },
        { id: 2, name: 'Scruffle', bio: 'Scruffle is a scrappy little dog with a heart of gold and a love for belly rubs.' },
        { id: 3, name: 'Charlie', bio: 'Charlie is a playful parrot with a knack for mimicking words and whistling tunes.' },
        { id: 4, name: 'Nobby', bio: 'Nobby is a clever rabbit who enjoys hopping around the garden and munching on carrots.' },
        { id: 5, name: 'Jiji', bio: 'Jiji is a sleek black cat who prefers lounging in the sun and watching birds from afar.' },
        { id: 6, name: 'Suki', bio: 'Suki is an adventurous hamster who loves running on her wheel and exploring new tunnels.' },
        { id: 7, name: 'Simba', bio: 'Simba is a majestic golden retriever with a love for the outdoors and long walks.' },
        { id: 8, name: 'Marley', bio: 'Marley is a mischievous ferret with an endless curiosity and a talent for sneaking around.' },
        { id: 9, name: 'Diesel', bio: 'Diesel is a loyal German Shepherd who enjoys playing fetch and protecting his family.' },
        { id: 10, name: 'Burkus', bio: 'Burkus is a wise old tortoise who spends his days basking in the sun and munching on greens.' }
    ];
    
    return (
        <div>
            {pets.map(pet => (
                <Link href={`/pets/${pet.id}`}>{pet.name}</Link>
            ))}
        </div>
    )
}