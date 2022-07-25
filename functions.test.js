

const {returnTwo, greeting, add, multiply, divide, subtract} = require("./functions.js");


 test("should return 2", ()=>{
    expect(returnTwo()).toBe(2);
 });

 test("should return string Hello, Chaltu.", ()=>{
    expect(greeting("Chaltu")).toBe("Hello, Chaltu.");
    expect(greeting("Jill")).toBe("Hello, Jill.");
 });

 test("should sum up the two numbers ", ()=>{
    expect(add(1, 2)).toBe(3);
    expect(add(5, 9)).toBe(14);
 });

 describe("math functions test", ()=>{

    test("should multiple numbers", ()=>{
        expect(multiply(2,2)).toBe(4);
        expect(multiply(3,2)).toBe(6);
    });

    test("should divide numbers", ()=>{
        expect(divide(9,3)).toBe(3);
        expect(divide(16,4)).toBe(4);
    });

    test("should subtract numbers", ()=>{
        expect(subtract(12, 5)).toBe(7);
        expect(subtract(8, 3)).toBe(5);
    });

 });