import findValue from '../src/index';

//Define a test object
const TestObject = {
    string: "a",
    number: 45,
    boolean: true,
    null: null,
    object: {
        string: "a",
        number: 45,
        boolean: true,
        null: null,
        object: {
            string: "a",
            number: 45,
            boolean: true,
            null: null,
            object: {
                string: "a",
                number: 45,
                boolean: true,
                null: null
            }
        }
    }
};

describe("Top Level Properties", () => {
    test("String Object", () => {
        expect(findValue(TestObject, "string")).toBe("a");
        expect(typeof findValue(TestObject, "string")).toBe("string");
    });

    test("Number Object", () => {
        expect(findValue(TestObject, "number")).toBe(45);
        expect(typeof findValue(TestObject, "number")).toBe("number");
    });

    test("Boolean Object", () => {
        expect(findValue(TestObject, "boolean")).toBe(true);
        expect(typeof findValue(TestObject, "boolean")).toBe("boolean");
    });

    test("Null Object", () => {
        expect(findValue(TestObject, "null")).toBe(null);
        expect(typeof findValue(TestObject, "null")).toBe("object");
    });

    test("Undefined Object", () => {
        expect(findValue(TestObject, "undefined")).toBe(undefined);
        expect(typeof findValue(TestObject, "undefined")).toBe("undefined");
    });
});

describe("Second Level Properties", () => {
    test("String Object", () => {
        expect(findValue(TestObject, "object.string")).toBe("a");
        expect(typeof findValue(TestObject, "object.string")).toBe("string");
    });

    test("Number Object", () => {
        expect(findValue(TestObject, "object.number")).toBe(45);
        expect(typeof findValue(TestObject, "object.number")).toBe("number");
    });

    test("Boolean Object", () => {
        expect(findValue(TestObject, "object.boolean")).toBe(true);
        expect(typeof findValue(TestObject, "object.boolean")).toBe("boolean");
    });

    test("Null Object", () => {
        expect(findValue(TestObject, "object.null")).toBe(null);
        expect(typeof findValue(TestObject, "object.null")).toBe("object");
    });

    test("Undefined Object", () => {
        expect(findValue(TestObject, "undefined")).toBe(undefined);
        expect(typeof findValue(TestObject, "object.undefined")).toBe("undefined");
    });
});

describe("Third Level Properties", () => {
    test("String Object", () => {
        expect(findValue(TestObject, "object.object.string")).toBe("a");
        expect(typeof findValue(TestObject, "object.object.string")).toBe("string");
    });

    test("Number Object", () => {
        expect(findValue(TestObject, "object.object.number")).toBe(45);
        expect(typeof findValue(TestObject, "object.object.number")).toBe("number");
    });

    test("Boolean Object", () => {
        expect(findValue(TestObject, "object.object.boolean")).toBe(true);
        expect(typeof findValue(TestObject, "object.object.boolean")).toBe("boolean");
    });

    test("Null Object", () => {
        expect(findValue(TestObject, "object.object.null")).toBe(null);
        expect(typeof findValue(TestObject, "object.object.null")).toBe("object");
    });

    test("Undefined Object", () => {
        expect(findValue(TestObject, "object.object.undefined")).toBe(undefined);
        expect(typeof findValue(TestObject, "object.object.undefined")).toBe("undefined");
    });
});

describe("Fourth Level Properties", () => {
    test("String Object", () => {
        expect(findValue(TestObject, "object.object.object.string")).toBe("a");
        expect(typeof findValue(TestObject, "object.object.object.string")).toBe("string");
    });

    test("Number Object", () => {
        expect(findValue(TestObject, "object.object.object.number")).toBe(45);
        expect(typeof findValue(TestObject, "object.object.object.number")).toBe("number");
    });

    test("Boolean Object", () => {
        expect(findValue(TestObject, "object.object.object.boolean")).toBe(true);
        expect(typeof findValue(TestObject, "object.object.object.boolean")).toBe("boolean");
    });

    test("Null Object", () => {
        expect(findValue(TestObject, "object.object.object.null")).toBe(null);
        expect(typeof findValue(TestObject, "object.object.object.null")).toBe("object");
    });

    test("Undefined Object", () => {
        expect(findValue(TestObject, "object.object.object.undefined")).toBe(undefined);
        expect(typeof findValue(TestObject, "object.object.object.undefined")).toBe("undefined");
    });
});