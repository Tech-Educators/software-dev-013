const plantSpecies = [
    {
      name: "Rose",
      scientificName: "Rosa",
      type: "Flowering plant",
      nativeRegion: "Asia, Europe, North America",
      colors: ["Red", "Pink", "White", "Yellow", "Orange"],
      bloomingSeason: "Spring to Fall"
    },
    {
      name: "Sunflower",
      scientificName: "Helianthus annuus",
      type: "Flowering plant",
      nativeRegion: "North America",
      colors: ["Yellow"],
      bloomingSeason: "Summer to Early Fall"
    },
    {
      name: "Lavender",
      scientificName: "Lavandula",
      type: "Flowering herb",
      nativeRegion: "Mediterranean",
      colors: ["Purple", "Lavender"],
      bloomingSeason: "Late Spring to Summer"
    },
    {
      name: "Orchid",
      scientificName: "Orchidaceae",
      type: "Flowering plant",
      nativeRegion: "Worldwide (mostly tropical regions)",
      colors: ["White", "Pink", "Purple", "Yellow"],
      bloomingSeason: "Varies by species, often year-round"
    },
    {
      name: "Cactus",
      scientificName: "Cactaceae",
      type: "Succulent",
      nativeRegion: "Americas",
      colors: ["Green (plant)", "Various (flowers)"],
      bloomingSeason: "Spring to Summer"
    },
    {
      name: "Daffodil",
      scientificName: "Narcissus",
      type: "Flowering plant",
      nativeRegion: "Europe, North Africa",
      colors: ["Yellow", "White"],
      bloomingSeason: "Late Winter to Early Spring"
    },
    {
      name: "Bamboo",
      scientificName: "Bambusoideae",
      type: "Grass",
      nativeRegion: "Asia, South America",
      colors: ["Green"],
      bloomingSeason: "Rare, varies widely"
    },
    {
      name: "Tulip",
      scientificName: "Tulipa",
      type: "Flowering plant",
      nativeRegion: "Central Asia, Turkey",
      colors: ["Red", "Pink", "Yellow", "White", "Purple"],
      bloomingSeason: "Spring"
    },
    {
      name: "Maple",
      scientificName: "Acer",
      type: "Tree",
      nativeRegion: "Asia, Europe, North America",
      colors: ["Green (leaves)", "Red (autumn foliage)"],
      bloomingSeason: "Spring"
    },
    {
      name: "Cherry Blossom",
      scientificName: "Prunus serrulata",
      type: "Tree",
      nativeRegion: "East Asia",
      colors: ["Pink", "White"],
      bloomingSeason: "Spring"
    }
  ];
  

  // takes a callback function
  // that callback function gets the individual current element of the array as a parameter/argument

//   plantSpecies.forEach(({name}) => {
//     console.log(name)
//   })


const transformed = plantSpecies.forEach((indivualElementOfTheArray) => {
    return `╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ ` + indivualElementOfTheArray.name
  })
// is undefined because forEach doesn't return something
console.log('This is for Each ' + transformed)


const transformedWithMap = plantSpecies.map((individualElement) => {
    return individualElement.name + `╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ `
})

console.log('This is .map() ' , transformedWithMap)