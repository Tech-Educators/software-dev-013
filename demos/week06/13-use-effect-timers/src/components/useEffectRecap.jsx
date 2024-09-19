import {useState, useEffect} from "react"

export default function UseEffectRecap() {
    const [count, setCount] = useState(0)
    console.log('Component rerunning 🤖')

    const [formData, setFormData] = useState({
        name: null
    })

    // when we put code inside useEffect we are saying - don't run this when the component re-renders.
    useEffect(() => {
        function foo() {
            console.log('foo is running')
            console.log('🐸')
            console.log(formData.name)
        }
    
        foo()
    },[count])

    // function foo() {
    //     console.log('foo is running')
    //     console.log('🐸')
    // }

    // foo()
    
    return (
        <div>
            <button onClick={() => {
                setCount(count+1)
                console.log('Component just re-rendered 👀')
            }}>click</button>


            <br/>

            <button onClick={() => {
                setFormData({name: 'Sam'})
            }}></button>
        </div>
    )
}