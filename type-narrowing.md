
# Understanding Type Narrowing in TypeScript

## Introduction

TypeScript allows a variable to hold different types of values using union types. However, we cannot always use the same methods on every type. This is where type narrowing becomes useful. It helps TypeScript understand the actual type of a value before performing an operation.

## Type Narrowing with typeof

The `typeof` operator checks the type of a value at runtime.

```ts
const processValue = (value: string | number): string => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return value.toString();
};
```

When the value is a string, we can safely use `toUpperCase()`. Otherwise, TypeScript understands that the remaining type is a number.

## Type Narrowing with instanceof

The `instanceof` operator checks whether an object was created from a particular class.

```ts
class Employee {
    work(): string {
        return "Working";
    }
}

const checkEmployee = (value: unknown): string => {
    if (value instanceof Employee) {
        return value.work();
    }

    return "Not an employee";
};
```

This is useful when working with class instances because TypeScript can identify which methods are available.

## Type Narrowing with the in Operator

The `in` operator checks whether a property exists in an object.

```ts
type Admin = { permissions: string[] };
type Customer = { orders: number };

const getRole = (user: Admin | Customer): string => {
    if ("permissions" in user) {
        return "Admin";
    }

    return "Customer";
};
```

Here, TypeScript uses the property check to distinguish between the two object types.

## Conclusion

Type narrowing makes code safer by reducing uncertainty about variable types. Using `typeof`, `instanceof`, and `in` helps prevent invalid operations and improves the readability of TypeScript applications.
