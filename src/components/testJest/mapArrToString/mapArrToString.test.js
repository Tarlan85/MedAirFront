const mapArrToString = require("./mapArrToString");

describe("mapArrToString", () => {
    test("Korrectnoe znaceniye", () => {
        expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
    });
    test("Meshanina", () => {
        expect(mapArrToString([1,2,3,null,undefined,'asd'])).toEqual(['1','2','3'])
    });
    test("Pustoy massiv", () => {
        expect(mapArrToString([])).toEqual([])
    });
    test("Otricanie", () => {
        expect(mapArrToString([1,2,3])).not.toEqual([1,2,3,4])
    });
});
