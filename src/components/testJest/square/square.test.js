const square = require("./square");

describe("square", () => {
    beforeAll(() => {});
    beforeEach(() => {})
    test("correct value", () => {
        // expect(square(2)).toBe(4)
        // expect(square(2)).not.toBeUndefined()
        // expect(square(2)).toBeLessThan(5)
        // expect(square(2)).toBeGreaterThan(3)
        const spyMathPow = jest.spyOn(Math, "pow");
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });
    test("correct value2", () => {
        const spyMathPow = jest.spyOn(Math, "pow");
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });
    afterEach(() => {
        jest.clearAllMocks()
    })
    afterAll(() => {});
});
