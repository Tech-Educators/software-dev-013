function quotes(thingy) {
    return thingy
}

quotes(`hello`)
console.log(quotes('foo'))

console.log(quotes(`hello there`))


function sumTwoUnicorns(a, b) {
    return a + b
}

sumTwoUnicorns(15, 3000) 
sumTwoUnicorns(20, 20)


function solution(str){
    console.log('Hello i am running')
    return str.split('').reverse().join('')
}

console.log(solution('animals'))
console.log(solution('hello'))
 // doesn't show because i havn't consoled logged it