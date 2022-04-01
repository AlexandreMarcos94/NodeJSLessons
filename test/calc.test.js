import { Add, Substract, Multiply } from "./calc.mjs";

test("Perform test to know if 2 + 2 = 4", () => {
    expect(Add(2, 2)).toEqual(4);
})

test("Perform test to know if 3 - 2 = 1", () => {
    expect(Substract(3, 2)).toEqual(1);
})

test("Perform test to know if 3 * 2 = 6", () => {
    expect(Multiply(3, 2)).toEqual(6);
})