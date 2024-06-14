function isPositiveNumber(value: any): value is number {
    return typeof value === 'number' && value > 0;
}

function computeMeansWithValidation(a: any, b: any): [number, number] | null {
    if (!isPositiveNumber(a) || !isPositiveNumber(b)) {
        console.error('Both inputs must be positive numbers.');
        return null;
    }
    
    return computeMeans(a, b);
}

// Example usage
const a = 4;  // Valid input
const b = '9';  // Invalid input

const result = computeMeansWithValidation(a, b);
if (result) {
    const [geoMean, harmMean] = result;
    console.log(`Geometric Mean: ${geoMean}, Harmonic Mean: ${harmMean}`);
}
