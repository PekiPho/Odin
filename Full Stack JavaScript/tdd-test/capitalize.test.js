import capitalize from './capitalize.js';

capitalize("test");

test("test",()=>{
    expect(capitalize("test")).toBe("Test");
});

test("TEST",()=>{
    expect(capitalize("TEST")).toBe("TEST");
});

test("longer testing",()=>{
    expect(capitalize("longer testing")).toBe("Longer testing");
});

test("123456789",()=>{
    expect(capitalize("123456789")).toBe("123456789");
});

