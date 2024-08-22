const bunny = {
    name: 'Fluffles',
    breed: 'Holland Lop',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Holland_Lop_Bunny_Standing_On_Her_Back_Feet.jpg',
    favFoods: ['Carrots', 'Rabbit Food', 'Clovers', 'Nuts'],
    willBeEaten: true
}

// looping through an array thats inside an object.
for (let i = 0; i < bunny.favFoods.length; i++) {
    console.log(bunny.favFoods[i])
}

// carrots
// rabit food
// clovers
// nuts

// YOU can add key/values after the fact - doesn't have to be when you create the object.
bunny.veryCute = true;

console.log(bunny)


// OBJECT METHODS

const giraffe = {
    name: 'Gerald',
    breed: 'Masai giraffe',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/GiraffaCamelopardalisTippelskirchi-Masaai-Mara.JPG',
    favFoods: 'Trees',
    eat: function() {
        return 'Mmmm leaves'
    },
    getName: function(humanName) {
        return ` ${humanName} loves ${giraffe.name} `
    }
}


//EAT IS A METHOD
// JUST A FUNCTION ATTACHED/IN AN OBJECT

// how to call methods:
console.log(giraffe.eat())

console.log(giraffe.getName('Sam'))