const isPalindromeQuick = string => string.split('').reverse().join('') === string


function moreNormal (string) {
    const split = string.split('') // ['r','a','c', 'e', 'a','r']
    const reversedArray = split.toReversed()
    const backToString = reversedArray.join('')
    return backToString === string
}
// write a function
// @param = string 
// @return = true/false (boolean)

export function isPalindrome(string) {
    // hint - strings can be turned into arrays 
    for (let i = 0; i < string.length / 2; i++) {
        // run some code 
        if (string[i] != string[(string.length - 1) - i]) {
            return false;
        }
    }
    return true
}

console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('racetrack'))
console.log(isPalindrome('madam')) // true
console.log(isPalindrome('tenet'))


isPalindrome('racetrack') // false
isPalindrome('madam') // true
isPalindrome('tenet')


function isPalindrome2(string) {
    const list = string.split("");
    console.log(list);
    const reversed = list.toReversed();
    console.log(reversed);
    if(list === reversed) {
      return true;
    } else {
      return false;
    }
}
  
  console.log(isPalindrome2("racecar", 'shaun'));