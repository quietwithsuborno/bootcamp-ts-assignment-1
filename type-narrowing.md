# Type Narrowing in TypeScript and How to Use `typeof`, `instanceof`, and the `in` Operator

In programming, sometimes we fall into a situation where a variable's value has no fixed data type. At that time, we use a union type to declare the variable with multiple data types.

But there's a problem: how can we tell TypeScript which data type to use for that variable in a particular situation? Because if we don't tell TypeScript about that specific situation, it will not allow us to execute certain operations. The technique to solve this problem is called type narrowing.

In this discussion, we will see how we can solve this problem using `typeof`, `instanceof`, and the `in` operator.

## typeof

We can check the primitive data type by using `typeof`:

```ts
function printValue(value: string | number): string | number {
    
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
        
    else {
        return value * 10;
    }    
}
```

Here, TypeScript can understand that in the `if` block, `value` is a string, and in the second block, it is a number. If we don't use `typeof`, then we cannot use the string method `.trim()` here, and we cannot multiply in the second block.

## instanceof

By using `instanceof`, we can check whether an object is an instance of a class or not.

```ts
class Girl {
    girlAttendance(): void {
        console.log("she is a girl");
    }
}

class Boy {
    boyAttendance(): void {
        console.log("he is a boy");
    }
}

function attendance(student: Girl | Boy): void {
    if (student instanceof Girl) {
        student.girlAttendance();
    }
    else {
        student.boyAttendance();
    }
}
```

Here, TypeScript can understand that in the `if` block, `student` is an instance of the `Girl` class, and in the `else` block, it is an instance of the `Boy` class.

We cannot use `typeof` here because both `Girl` and `Boy` are objects, and `typeof` returns `"object"` for both of them.

## in

By using the `in` operator, we can check if a specific property is present in an object.

```ts
type User = { name: string; email: string };
type Admin = { name: string; role: string };

function getDetails(user: User | Admin): void {
    if ("email" in user) {
        console.log(user.email);
    }
}
```

Here, TypeScript can understand that inside the `if` block, `user` is a `User` type because it contains the `email` property. We use it because interfaces and types do not exist at runtime, so we cannot check them using `instanceof`.

## Conclusion

Using these three methods, TypeScript code can be made more type-safe and easier to read.
