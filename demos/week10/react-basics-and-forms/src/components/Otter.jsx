'use client'

import Image from "next/image"

export default function Otter({name, img_url, thisPropNameDoesntMatter}) {
   

    /*
    {
    img_url: 'https://otter.jpg,
    name: 'Perry'
    }

    sayHello()

    */
    return (
        <div>
            <Image src={img_url} height={400} width={300} onClick={() => {
                thisPropNameDoesntMatter()
            }}/>
            <p>{name}</p>
        </div>
    )
}