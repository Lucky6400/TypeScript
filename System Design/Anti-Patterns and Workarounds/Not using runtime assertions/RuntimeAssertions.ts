function computeMeans(a: number, b: number): [number, number] {
    if (a <= 0 || b <= 0) {
        throw new Error('Both numbers must be positive');
    }
    
    const geometricMean = Math.sqrt(a * b);
    const harmonicMean = 2 * (a * b) / (a + b);
    
    return [geometricMean, harmonicMean];
}

// Example usage
try {
    const [geoMean, harmMean] = computeMeans(4, 9);
    console.log(`Geometric Mean: ${geoMean}, Harmonic Mean: ${harmMean}`);
} catch (error) {
    console.error(error.message);
}
