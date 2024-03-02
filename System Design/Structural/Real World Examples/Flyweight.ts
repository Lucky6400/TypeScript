// BigInteger.ts
export class BigInteger {
    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    add(other: BigInteger): BigInteger {
        return new BigInteger(this.value + other.value);
    }

    subtract(other: BigInteger): BigInteger {
        return new BigInteger(this.value - other.value);
    }

    multiply(other: BigInteger): BigInteger {
        return new BigInteger(this.value * other.value);
    }

    getValue(): number {
        return this.value;
    }
}

export class BigIntegerFactory {
    private cache: Map<number, BigInteger> = new Map();

    create(value: number): BigInteger {
        if (!this.cache.has(value)) {
            this.cache.set(value, new BigInteger(value));
        }

        return this.cache.get(value);
    }
}
