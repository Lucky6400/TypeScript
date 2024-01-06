// Product Interface
interface Product {
    getName(): string;
    getPrice(): number;
}

// Concrete Products
class Laptop implements Product {
    getName(): string {
        return "Laptop";
    }

    getPrice(): number {
        return 1000;
    }
}

class Smartphone implements Product {
    getName(): string {
        return "Smartphone";
    }

    getPrice(): number {
        return 500;
    }
}

// Creator Interface
interface ProductFactory {
    createProduct(): Product;
}

// Concrete Creators
class LaptopFactory implements ProductFactory {
    createProduct(): Product {
        return new Laptop();
    }
}

class SmartphoneFactory implements ProductFactory {
    createProduct(): Product {
        return new Smartphone();
    }
}

// Client Code
const laptopFactory = new LaptopFactory();
const smartphoneFactory = new SmartphoneFactory();

const laptop = laptopFactory.createProduct();
const smartphone = smartphoneFactory.createProduct();

console.log(laptop.getName());      // Output: Laptop
console.log(laptop.getPrice());     // Output: 1000

console.log(smartphone.getName());  // Output: Smartphone
console.log(smartphone.getPrice()); // Output: 500
