const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * t calc(3).v // 3 
     * t calc(3).add(5).v // 8
     * t calc(3).minus(2).v // 1
     * t calc(4).sqrt().v // 2
     * t calc(3).times(10).v // 30
     * t calc(10).divide(2).v // 5
     * t calc(10).modulo(5).v // 0
     * t calc(5).divide(0) // throw error
     * ? calc(-3).sqrt() // throw error
     * t calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator

    describe("value", () => {
        it("should exist", () => {
            const c = calc(42);
            expect(c).not.to.be.undefined;
        });
    });

    describe("add", () => {
        it("should exist add", () => {
            const c = calc(42);
            expect(c.add).not.to.be.undefined;
        });
        it("should be able to add a number to the current value", () => {
            const c = calc(5);
            const result = c.add(3).v;
            expect(result).to.equal(8);
        });
    });

    describe("minus", () => {
        it("should exist minus", () => {
            const c = calc(42);
            expect(c.minus).not.to.be.undefined;
        });
        it("should be able to substract a number from the current value", () => {
            const c = calc(10);
            const result = c.minus(4).v;
            expect(result).to.equal(6);
        });
    });

    describe("multiply", () => {
        it("should exist times", () => {
            const c = calc(42);
            expect(c.times).not.to.be.undefined;
        });
        it("should be able to multiply the current value with a number", () => {
            const c = calc(3);
            const result = c.times(10).v;
            expect(result).to.equal(30);
        });
        it("should be able to multiply the current value with 0", () => {
            const c = calc(3);
            const result = c.times(0).v;
            expect(result).to.equal(0);
        });
    });

    describe("division", () => {
        it("should exist divide", () => {
            const c = calc(42);
            expect(c.divide).not.to.be.undefined;
        });
        it("should be able to perform a valid division", () => {
            const c = calc(10);
            const result = c.divide(2).v;
            expect(result).to.equal(5);
        });
        it("should handle division by 0", () => {
            const c = calc(3);
            expect(() => c.divide(0)).to.throw("Division");
        });
    });

    describe("special", () => {
        it("should exist modulo", () => {
            const c = calc(42);
            expect(c.modulo).not.to.be.undefined;
        });
        it("should exist sqrt", () => {
            const c = calc(42);
            expect(c.sqrt).not.to.be.undefined;
        });
        it("should be able to use modulo", () => {
            const c = calc(10);
            const result = c.modulo(5).v;
            expect(result).to.equal(0);
        });
        it("should be able to use sqrt", () => {
            const c = calc(4);
            const result = c.sqrt().v;
            expect(result).to.equal(2);
        });
        it("should sqrt handle minus number", () => {
            const c = calc(-3);
            expect(() => c.sqrt()).to.throw("Square");
        });
    });

    describe("chainng", () => {
        it("should chain multiple operation together", () => {
            const c = calc(3);
            const result = c.add(4).minus(3).times(6).v;
            expect(result).to.be.equal(24);
        });
    });
    
});