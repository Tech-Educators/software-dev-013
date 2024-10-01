import { findBySlug } from "@/stores/mushrooms"

export default function Page({params}) {
    console.log(params)

    const mushroomInfo = findBySlug(params.slug)

    //{ params: { slug: 'shiitake-mushrooms' }, searchParams: {} }
    return (
        <div>
            <h2>{mushroomInfo.slug}</h2>
            <img src={mushroomInfo.image} />
            <br />
            <p>{mushroomInfo.description}</p>
            <p>{mushroomInfo.climate}</p>
        </div>
    )
}