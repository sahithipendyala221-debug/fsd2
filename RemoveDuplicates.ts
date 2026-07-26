// Program to Remove Duplicate Characters from a String

let str: string = "programming";
let result: string = "";

// Remove duplicate characters
for (let i: number = 0; i < str.length; i++) {

    let ch: string = str[i];

    // Check if the character is already in the result
    if (result.indexOf(ch) === -1) {
        result = result + ch;
    }
}

// Display the result
console.log("Original String = " + str);
console.log("String after removing duplicates = " + result);