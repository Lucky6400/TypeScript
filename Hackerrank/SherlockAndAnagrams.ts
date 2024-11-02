function sherlockAndAnagrams(s: string): number {
    const substringMap = new Map<string, number>();
    let anagramPairs = 0;

    // Generate all substrings, sort them, and store counts in substringMap
    for (let start = 0; start < s.length; start++) {
        for (let end = start + 1; end <= s.length; end++) {
            // Sort the substring to use as a key
            const substring = s.slice(start, end).split('').sort().join('');
            
            // Increment the count of the sorted substring in the map
            const count = substringMap.get(substring) || 0;
            substringMap.set(substring, count + 1);
        }
    }

    // Calculate the total number of anagrammatic pairs
    for (const count of substringMap.values()) {
        if (count > 1) {
            anagramPairs += (count * (count - 1)) / 2; // Combination count for pairs
        }
    }

    return anagramPairs;
}