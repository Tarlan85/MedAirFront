const validateValue = require("./validateValue");

describe("Value Validation", () => {
    test("Koorectnoe znacheniye", () => {
        expect(validateValue(50)).toBe(true)
    });
    test("Znacheniye menshe nulya", () => {
        expect(validateValue(-2)).toBe(false);
    });
    test("Znacheniye bolshe nulya", () => {
        expect(validateValue(101)).toBe(false);
    });
    test("Pogranichniye znacheniya sverxu", () => {
        expect(validateValue(100)).toBe(true);
    });
    test("Pogranichniye znacheniya snizu", () => {
        expect(validateValue(0)).toBe(true);
    });
});
