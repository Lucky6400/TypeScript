// Partial<Type>
// Makes all properties of the given type optional.
interface User {
    name: string;
    age: number;
}

const partialUser: Partial<User> = {};

// Readonly<Type>
// Makes all properties of the given type read-only.
const readOnlyUser: Readonly<User> = { name: 'John', age: 25 };

// Record<Keys, Type>
// Constructs an object type with properties defined by the given keys and values of the specified type.
const userRecord: Record<string, string> = {
    name: 'John',
    email: 'john@example.com',
};

// Pick<Type, Keys>
// Constructs a type by picking the set of properties specified by the keys.
interface Car {
    make: string;
    model: string;
    year: number;
}

const pickedCar: Pick<Car, 'make' | 'model'> = {
    make: 'Toyota',
    model: 'Camry',
};

// Omit<Type, Keys>
// Constructs a type by omitting the set of properties specified by the keys.
const omittedCar: Omit<Car, 'year'> = {
    make: 'Honda',
    model: 'Accord',
};

// Exclude<Type, ExcludedUnion>
// Constructs a type by excluding properties that are in the union.
type StringOrNumber = string | number;
const excludedValue: Exclude<StringOrNumber, number> = 'hello';

// Extract<Type, Union>
// Constructs a type by extracting properties that are in the union.
const extractedValue: Extract<StringOrNumber, number> = 42;

// NonNullable<Type>
// Constructs a type by excluding null and undefined.
type NullableString = string | null | undefined;
const nonNullableString: NonNullable<NullableString> = 'hello';

// ReturnType<Type>
// Extracts the return type of a function type.
function greet(): string {
    return 'Hello!';
}

const returnTypeOfGreet: ReturnType<typeof greet> = 'Hello';

// Parameters<Type>
// Extracts the parameter types of a function type.
function add(a: number, b: number): number {
    return a + b;
}

const parametersOfAdd: Parameters<typeof add> = [1, 2];

// ConstructorParameters<Type>
// Extracts the parameter types of a constructor function.
class ExampleClass {
    constructor(a: number, b: string) { }
}

const constructorParams: ConstructorParameters<typeof ExampleClass> = [1, 'hello'];

// InstanceType<Type>
// Constructs an instance type from a constructor function type.
const instance: InstanceType<typeof ExampleClass> = new ExampleClass(1, 'hello');

// Required<Type>
// Constructs a type with all properties of the given type set to required.
interface OptionalProps {
    name?: string;
    age?: number;
}

const requiredProps: Required<OptionalProps> = { name: 'John', age: 25 };

// ThisParameterType<Type>
// Extracts the type of the 'this' parameter of a function type.
function logThis(this: { message: string }): void {
    console.log(this.message);
}

type ThisParamType = ThisParameterType<typeof logThis>; // { message: string }

// OmitThisParameter<Type>
// Removes the 'this' parameter from a function type.
type LogFunctionType = (this: void, message: string) => void;
type WithoutThis = OmitThisParameter<LogFunctionType>; // (message: string) => void

// Keyof<Type>
// Extracts the keys of a given type.
type KeysOfUser = keyof User; // "name" | "age"