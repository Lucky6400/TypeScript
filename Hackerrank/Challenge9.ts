function superReducedString(s: string): string {
    // Write your code here
    const stack: string[] = [s[0]];
    
    for (let i = 1; i < s.length; i++) {
       if(s[i] === stack[stack.length - 1]) stack.pop();
       else stack.push(s[i]);
    }

    return stack.join("") || 'Empty String';
}
