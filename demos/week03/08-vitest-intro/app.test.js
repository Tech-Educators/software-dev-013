import {sum} from "./app"

// I need a few things from vitest
import {test, expect} from "vitest"


test('Check that Sum(1,1) returns 2', function() {
    expect(sum(1,1)).toBe(2)
})
