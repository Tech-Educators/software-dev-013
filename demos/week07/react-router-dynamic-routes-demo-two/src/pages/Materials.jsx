import { Link } from "react-router-dom";
import { materials } from "../stores/materialList";
export default function Materials() {

      
    return (
        <div>
            {materials.map(material => (
                <div>
                    <Link to={`/materials/${material.id}`}>{material.name}</Link>
                </div>
            ))}
        </div>
    )
}