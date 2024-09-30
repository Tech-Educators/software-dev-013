export default function SingularPetPage({params}) {
    console.log(params)
    return (
        <div>
            <h1>Information about this pet:</h1>
        </div>
    )
}

// every single page.js file in nextjs will always recieve two props - params and search params.