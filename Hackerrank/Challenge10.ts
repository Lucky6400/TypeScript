function isAlt(arr: string[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] === arr[i+1]) return false;
    }
    
    return true;
}


function alternate(s: string): number {
    // Write your code here

    let maxLen: number = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let first: string = s[i];
            let second: string = s[j];

            let chars: string[] = s.split("").filter(c => c === first || c === second);

            if (isAlt(chars) && chars.length > maxLen) maxLen = chars.length;
        }
    }

    return maxLen;
}