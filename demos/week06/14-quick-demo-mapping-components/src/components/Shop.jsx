import { plantSpecies } from "../stores/shopArray"
import ShopItem from "./ShopItem"

export default function Shop() {


    // because 'canPurchase' needs to know the amount of cookies
    // this shop component will get them as props from my app.js
    // but my shopItems need to be able to respond/do something when the user tries to purchase something. 
    // so im passing the function canPurchase donw to the shoptiem
    function canPurchase(item) {
        // based on the cookies the user has. 
        console.log(item)
    }


    return (
        <div>
            {/* if the arrow function uses ()'s then don't need to use the return keyword */}
            {plantSpecies.map((elem) => (
                <ShopItem plant={elem} canPurchase={canPurchase}/>
            ))}

            {/* vs */}

            {/* {plantSpecies.map(() => {
                return (
                    <></>
                )
            })} */}
        </div>
    )
}