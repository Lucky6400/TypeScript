/*
    Typescript comes with in-built utility types for different purposes. These can be used to create robust applications without writing custom logic for everything.
 */

// consider a User model. If we want it to be immutable, we will use the ReadOnly utility type

type MyUser = Readonly<{
    name: string;
    email: string;
}>;

// we can also create custom utility types. This one is for creating an object type whose property keys are all optional properties taken from type K and whose property values are of type T.

type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
