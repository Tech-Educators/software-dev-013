import InfoCard from "@/components/InfoCard";

export default function Page() {
    return (
        <div>
            <InfoCard title='Wow did you see that' paragraph='foooooo barrrr' coolFunction={(message) => {console.log(message)}} />
            {/* <InfoCard title={25} paragraph='foooooo barrrr' /> */}
        </div>
    )
}

// next week context. 
// generics 
// partial helper type

// const hello = (message:string) => {console.log(message)}

// const greeting:string = hello('Hello') // greeting is undefined. 

//  console.log(greeting)