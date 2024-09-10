// we need some code from vitest (handles the testing for us)
import {test, expect} from "vitest"
// and we need to import the code we want to test (my cool isPalindrome function)
import { isPalindrome } from "./app";

// test is a function we're importing from vitest
// two arguments
// @string - name you want to give the test
// @function - call back function - the code to run the test
test(`Check if isPalindrome works 'racecar'`, function() {
    // I'm expecting the result (returned value from isPalindrome to be 'true')
    expect(isPalindrome('racecar')).toBe(true)
    expect(isPalindrome('foobar')).toBe(false)
    expect(isPalindrome('kayak')).toBe(true)
})


// NPM RUN TEST to start running vitest

// to run your tests
// go to package.json
// and in the scripts section, 
// change the 'test' script to be equal to 'vitest'

/*

 "scripts": {
    "test": "vitest"
  }
*/