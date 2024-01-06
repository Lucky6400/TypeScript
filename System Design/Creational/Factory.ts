/*
A Factory Method is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. In other words, it defines an interface for creating an object but leaves the choice of its type to the subclasses, creating an instance of the appropriate class.

Here's a breakdown of the key components:

1. **Product Interface or Abstract Class:**
   - This is the interface or abstract class that declares the creation methods. In your example, it's the `Player` interface.

2. **Concrete Products:**
   - These are the actual classes that implement the `Product` interface or extend the abstract class. In your example, `RahulDravid` and `AnilKumble` are concrete products.

3. **Creator Interface or Abstract Class:**
   - This is an interface or abstract class that declares the factory method, which returns an object of type `Product` (or its interface). In your example, it's the `PlayerFactory` interface.

4. **Concrete Creators:**
   - These are the concrete classes that implement the `Creator` interface and provide a specific implementation of the factory method. In your example, `AnilKumbleFactory` and `RahulDravidFactory` are concrete creators.

**When to use the Factory Method pattern:**

1. **Subclasses Decide the Product:**
   - When a class cannot anticipate the class of objects it must create, and the system is configured to work with multiple families of products.

2. **Common Interface for Creating Objects:**
   - When you want to provide a common interface for creating objects, but allow subclasses to alter the type of objects created.

3. **Eliminating the Need for Client Code to Specify the Class of Objects:**
   - When the system is configured with multiple families of products and client code shouldn't be concerned with the specifics of creating objects.

4. **Promoting Loose Coupling:**
   - When you want to avoid tight coupling between the creator and the concrete products, promoting flexibility and maintainability.

In your TypeScript example, the `PlayerFactory` acts as the factory method, allowing you to create instances of different players without specifying their concrete classes directly. This pattern is particularly useful in scenarios where you expect the creation of objects to be extended or customized by subclasses.
*/


interface Player {
    getName(): string;
    getRole(): string;
}

class RahulDravid implements Player {
    getName(): string {
        return "Rahul Dravid";
    }

    getRole(): string {
        return "Right Handed Batsman";
    }
}

class AnilKumble implements Player {
    getName(): string {
        return "Anil Kumble";
    }

    getRole(): string {
        return "Right Arm Spin Bowler";
    }
}

interface PlayerFactory {
    create(): Player
}

class AnilKumbleFactory implements PlayerFactory {
    create(): Player {
        return new AnilKumble();
    }
}

class RahulDravidFactory implements PlayerFactory {
    create(): Player {
        return new RahulDravid();
    }
}

const anilKumble = new AnilKumbleFactory();
const rahulDravid = new RahulDravidFactory();

console.log(anilKumble.create());
console.log(rahulDravid.create())

export { Player, PlayerFactory, AnilKumbleFactory, RahulDravidFactory, AnilKumble, RahulDravid }