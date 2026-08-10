// Program to Count the Frequency of Characters in a String

let str: string = "programming";
let frequency: { [key: string]: number } = {};

// Count the frequency of each character
for (let i: number = 0; i < str.length; i++) {

    let ch: string = str[i];

    if (frequency[ch]) {
        frequency[ch]++;
    } else {
        frequency[ch] = 1;
    }
}

// Display the frequencies
console.log("String = " + str);
console.log("Character Frequencies:");

for (let ch in frequency) {
    console.log(ch + " : " + frequency[ch]);
}
