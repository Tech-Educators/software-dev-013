import Image from "next/image"
// components dont have be client or server based - can be either
// components are just functions that return JSX

// in our jsx we can use javascript expressions (final value returned), but not statements (like if statements). 

// when a component needs to know data (so we make it reusable) from other parts of the application, we use 'props'

// thing of props just like parameters in a function - we can reuse the function with different arguments to get a different result.

// image, name, ispet?
// here we need to tell the PET component to get that data


// when we're doing just js functions, if we want to make the function reusable we give it different parameters. 

// in react, if we whant to make a component reusable, we pass it different 'props'.

export default function Pet({img_url, pet_name, isPet}) {

    // console.log('THis is the props console.log', props)

    // const image = props.img_url
    return (
        <div>
            <Image height={500} width={500} src={img_url}/>
            <p>{pet_name}</p>
            <p>{isPet}</p>
        </div>
    )
}

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2TefYIQELg5J2TdRT-PUwUvojjYAyvKYfA&s

// https://cdn.britannica.com/57/7057-050-33CEB562/Bactrian-camel.jpg?w=300

// just a normal js function no JSX. 

export function PetTwo(imageParam, nameParam, isPetParam) {
    return {
        image: imageParam,
        name: nameParam,
        isPet: isPetParam
    }
}