import { sum } from '../sum';
test("sum function should return the sum of two numbers", () => {
    const result = sum(4,5);
    //Assertion
    expect(result).toBe(9);
});