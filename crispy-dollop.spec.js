const crispyDollop = require('./crispy-dollop');

describe("Crispy Dollop", () => {
    it("solves 12", () => {
        expect(crispyDollop.nextNumber(12)).toBe(21);
    });

    it("solves 513", () => {
        expect(crispyDollop.nextNumber(513)).toBe(531);
    });

    it("solves 2017", () => {
        expect(crispyDollop.nextNumber(2017)).toBe(2071);
    });

    it("fails 9", () => {
        expect(crispyDollop.nextNumber(9)).toBe(-1);
    });

    it("fails 111", () => {
        expect(crispyDollop.nextNumber(111)).toBe(-1);
    });

    it("fails 531", () => {
        expect(crispyDollop.nextNumber(531)).toBe(-1);
    });

    it("solve 1999", () => {
        expect(crispyDollop.nextNumber(12345)).toBe(12354);
    });
    it("solve 12354", () => {
        expect(crispyDollop.nextNumber(12354)).toBe(12435);
    });
});