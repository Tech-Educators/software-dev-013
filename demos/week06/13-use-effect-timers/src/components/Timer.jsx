import {useState, useEffect} from "react"


export default function Timer() {
    const [cookies, setCookies] = useState(0)

    // setInterval - run this function every second 
   
    // we are going to use useEffect to make sure that we only create one interval in our app.

    useEffect(() => {
        console.log(`use effect is running 🥳`)

        // storing the interval so I can reference later
        const myInterval = setInterval(() => {
            console.log('This is the interval running ... 🏃‍♂️')
            setCookies(cookies => cookies + 1)
        }, 1000)

        // when the component unmounts (/between creating the code) 

        // we can return a cleanup function from the useEffect. 
        // what this does - useEffect will run the cleanup function 'below' when the component unmounts. for us, it will stop running the interval. 
        return () => {
            clearInterval(myInterval)
        }
    }, [])

    return (
        <div>
            <p>{cookies}</p>
        </div>
    )
}