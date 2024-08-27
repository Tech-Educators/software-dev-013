// using this array of pet objects, log each of the pets information to the console one by one in a string 
// use either forEach, forOf, or a 'traditional' for loop.
// eg - `Buddy is a Dog, who is 3 years old` 

const pets = [
    {
      name: "Buddy",
      type: "Dog",
      age: 3
    },
    {
      name: "Whiskers",
      type: "Cat",
      age: 2
    },
    {
      name: "Nibbles",
      type: "Hamster",
      age: 1
    }
  ];

// console.log(pets[2].type)

// A *lot* of control over the array and how you go through it.
for (let i = 0; i < pets.length; i++) {
    console.log(`${pets[i].name} is a ${pets[i].type} who is ${pets[i].age}`)
}

// FOR EACH
pets.forEach(function(pet) {
    console.log(`${pet.name} is a ${pet.type} and they are ${pet.age}`)
})