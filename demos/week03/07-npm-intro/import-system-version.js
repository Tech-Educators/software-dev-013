// to do this,
// go to your package.json file and add "type":"module" at the end. 

/*
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cowsay": "^1.6.0"
  },
  "type": "module"
*/

// stole this by looking at the docs for the package - didn't just guess the answer!
import * as cowsay from "cowsay"

console.log(cowsay.say({
    text : "I love javascript and tech educators! ",
    e : "^^",
    T : "VV "
}));


console.log(cowsay.think({
    text: 'Dont give up! You can do this!',
    f: 'Wizard'

}))

