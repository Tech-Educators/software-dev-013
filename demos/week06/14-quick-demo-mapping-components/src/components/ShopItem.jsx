export default function ShopItem({plant, canPurchase}) {
    return (
        <div className="plant">
            <h2>{plant.name}</h2>
            <p>{plant.scientificName}</p>
            {/* <br/> */}
            <p>{plant.nativeRegion}</p>

            {plant.colors.map((color) => (
                <p>{color}</p>
            ))}
            <p>{plant.bloomingSeason}</p>

            <button onClick={() => {
                canPurchase(plant)
            }}>buy me!</button>
        </div>
    )
}


// name: "Rose",
//       scientificName: "Rosa",
//       type: "Flowering plant",
//       nativeRegion: "Asia, Europe, North America",
//       colors: ["Red", "Pink", "White", "Yellow", "Orange"],
//       bloomingSeason: "Spring to Fall"