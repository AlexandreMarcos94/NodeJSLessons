import { Add, Substract, Multiply } from "./calc.mjs";
import { getAll } from "../server/products.mjs";

// const pdt = [{
//     "name": "Poire",
//     "quantity": 20
// }]

test("Perform test to know if 2 + 2 = 4", () => {
    expect(Add(2, 2)).toEqual(4);
})

test("Perform test to know if 1 + 2 = 4", () => {
    expect(Add(1, 2)).toEqual(4);
})

test("Perform test to know if 3 - 2 = 1", () => {
    expect(Substract(3, 2)).toEqual(1);
})

test("Perform test to know if 3 * 2 = 6", () => {
    expect(Multiply(3, 2)).toEqual(6);
})

// Utilisation de MOCK pour les tests sur fichier json 

// test("Perform test to know if getAll() is ok", () => {
//     expect(getAll()).toMatchObject(pdt);
// })