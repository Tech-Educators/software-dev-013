import { useParams, Outlet } from "react-router-dom"

export default function Materials() {

    const whole = useParams() 
    const {materialName} = useParams()

    console.log(whole)
    console.log(materialName)

    return (
        <div>
            <p>Because this is a dynamic route, anything after /materials will render here!</p>

            <p>This is the page for </p>
            <h2>{materialName}</h2>

            <Outlet />
        </div>
    )
}