export const materials = [
    {
      id: 1,
      name: 'Tungsten',
      description: 'Tungsten has the highest melting point of any metal, often used in light bulb filaments and high-temperature applications.',
      funFact: 'Tungsten’s name comes from the Swedish words "tung sten," meaning "heavy stone."'
    },
    {
      id: 2,
      name: 'Cashmere',
      description: 'A luxurious fiber obtained from cashmere goats, known for its softness and warmth.',
      funFact: 'It takes one goat about four years to produce enough cashmere for a single sweater!'
    },
    {
      id: 3,
      name: 'Gold',
      description: 'A precious metal prized for its beauty, rarity, and conductivity.',
      funFact: 'Gold is so malleable that one ounce can be stretched into a wire more than 50 miles long.'
    },
    {
      id: 4,
      name: 'Steel',
      description: 'An alloy of iron and carbon, steel is one of the most common building materials in the world.',
      funFact: 'Steel can be recycled indefinitely without losing quality.'
    },
    {
      id: 5,
      name: 'Adamantium',
      description: 'A fictional indestructible metal from the Marvel universe, best known for being in Wolverine’s claws.',
      funFact: 'Though fictional, adamantium has become a symbol of invincibility in pop culture.'
    },
    {
      id: 6,
      name: 'Unobtainium',
      description: 'A fictional material that is extremely rare or impossible to obtain, often used in sci-fi.',
      funFact: 'The term "unobtainium" is jokingly used by engineers to describe materials that are perfect in theory but impossible to find.'
    },
    {
      id: 7,
      name: 'Molybdenum',
      description: 'A metal used in alloys to enhance strength and resistance to corrosion.',
      funFact: 'Molybdenum can withstand extremely high temperatures, over 4,000°F!'
    },
    {
      id: 8,
      name: 'Polyethylene Terephthalate',
      description: 'Commonly known as PET, this plastic is used in packaging like water bottles and food containers.',
      funFact: 'PET can be recycled into new products, such as clothing or carpets.'
    },
    {
      id: 9,
      name: 'Germanium',
      description: 'A metalloid used in electronics and fiber optics for its excellent semiconductor properties.',
      funFact: 'Germanium was initially used in the early development of transistors before silicon took over.'
    },
    {
      id: 10,
      name: 'Bisphenol A',
      description: 'A chemical used in the production of plastics and resins, often found in water bottles and food containers.',
      funFact: 'Bisphenol A (BPA) has become infamous for its potential health risks, leading to widespread efforts to create BPA-free products.'
    }
  ];

// this will return the matching object from the materials array when the id paramater matches the materials.id in the function.

  export function findMaterial(id) {
    return materials.find(material => material.id == id)
  }