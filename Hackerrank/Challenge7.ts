function nonDivisibleSubset(k: number, s: number[]) {
    let counts = new Map<number, number>();

    // Initialize the counts map
    for (let i = 0; i < k; i++) {
        counts.set(i, 0);
    }

    // Count the remainders
    for (let num of s) {
        counts.set(num % k, counts.get(num % k)! + 1);
    }

    // Choose the maximum count for each remainder
    let count = Math.min(counts.get(0)!, 1);
    for (let i = 1; i <= k / 2; i++) {
        if (i !== k - i) {
            count += Math.max(counts.get(i)!, counts.get(k - i)!);
        }
    }

    // If k is even, at most one number that leaves a remainder of k / 2 can be chosen
    if (k % 2 === 0) {
        count++;
    }

    console.log(count);
    return count;
}
nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436])