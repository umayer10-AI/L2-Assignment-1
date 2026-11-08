
# Type vs Interface in TypeScript

## Introduction

TypeScript gives us two useful ways to describe data structures: `type` and `interface`. Both help us write safer code by defining what kind of data an object should contain. They look similar in many situations, but they have some important differences.

## Understanding Type Aliases

A type alias allows us to create a custom name for a type. It can describe objects, primitive types, unions, tuples, and more.

For example:

```ts
type User = {
    name: string;
    age: number;
};

type Status = "active" | "inactive";
```

Here, `User` represents an object structure, while `Status` accepts only two specific string values.

## Understanding Interfaces

An interface is mainly used to describe the structure of objects and classes.

```ts
interface User {
    name: string;
    age: number;
}
```

One useful feature of interfaces is declaration merging. If we declare the same interface twice, TypeScript can combine their properties.

```ts
interface Student {
    name: string;
}

interface Student {
    age: number;
}
```

Now `Student` requires both `name` and `age`. Type aliases do not support this kind of merging.

## When Should We Use Them?

I would choose an interface when defining object structures, especially for classes or extendable application models. A type alias is more useful when working with unions, tuples, or combinations of different types.

Both support reusable code, and neither is automatically better in every situation.

## Conclusion

The main difference is flexibility in what they can represent and how they can be extended. Understanding both makes TypeScript code easier to organize and maintain.
