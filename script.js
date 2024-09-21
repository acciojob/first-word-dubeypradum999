function firstWord(str) {
    // Trim any leading or trailing spaces
    str = str.trim();
    
    // Find the index of the first space
    let firstSpaceIndex = str.indexOf(' ');
    
    // If there's no space, return the entire string
    if (firstSpaceIndex === -1) {
        return str;
    }
    
    // Otherwise, return the substring from the start to the first space
    return str.substring(0, firstSpaceIndex);
}

// Test cases
console.log(firstWord('see and stop'));   // Output: 'see'
console.log(firstWord(' Hello World!'));  // Output: 'Hello'
console.log(firstWord('12345'));          // Output: '12345'
console.log(firstWord(''));               // Output: ''
