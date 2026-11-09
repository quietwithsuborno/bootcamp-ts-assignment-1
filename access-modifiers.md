# Access Modifiers in TypeScript OOP

In object-oriented programming, for the security of code and data encapsulation, access modifiers play an important role. In TypeScript, to control the access of class properties and methods, we can use four types of modifiers: `public`, `private`, `protected`, and `readonly`.

How they work is described below.

```ts
class Animal {
    public name: string = "Dog";
    private age: number = 5;
    protected species: string = "Mammal";
    readonly id: number = 101;

    public showDetails(): void {
        console.log(this.name);
        console.log(this.age);
        console.log(this.species);
        console.log(this.id);
    }
}

class Dog extends Animal {
    public showDogDetails(): void {
        // console.log(this.age); // Error
        console.log(this.species); // Allowed
    }
}

const animal = new Animal();

console.log(animal.name); // Allowed
// console.log(animal.age); // Error
// console.log(animal.species); // Error
console.log(animal.id); // Allowed

// animal.id = 102; // Error

const dog = new Dog();
dog.showDogDetails(); // Allowed
```

## Explanation of Access Modifiers

### 1. public

If we use the `public` modifier, then we can access the class's properties and methods from inside and outside the class. This is TypeScript's default access modifier.

### 2. private

If we use `private`, then we can access the class's properties and methods only from that class. It cannot be accessed from other locations, not even from a child class.

### 3. protected

If we use `protected`, then we can access the class's properties and methods from that class and its child class. But not from other classes or public locations.

### 4. readonly

`readonly` does not protect a property from being accessed by other classes. It can be accessed from outside the class, but it cannot be modified. If we assign one value, then we can only read the value, not change it.

## Conclusion

In TypeScript OOP, access modifiers can help us control the accessibility of a class's methods and properties. They help us organize, secure, and maintain our code.
