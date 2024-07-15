function generatePassword(length)
{
    // Different character sets to choose chars from
    const lowerCaseCharset = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digitCharset = "0123456789";
    const symbolCharset = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    // Determine the count of each set randomly
    const lowerCount = getRandomInt(1, length - 3);
    const upperCount = getRandomInt(1, length - lowerCount - 2);
    const digitCount = getRandomInt(1, length - lowerCount - upperCount - 1);
    const symbolCount = length - lowerCount - upperCount - digitCount;
    
    // Get random chars from each set, in random quantities
    let passwd = getRandomChars(lowerCaseCharset, lowerCount) + 
                getRandomChars(upperCaseCharset, upperCount) +
                getRandomChars(digitCharset, digitCount) +
                getRandomChars(symbolCharset, symbolCount);

    // Shuffle the string to mix characters order
    passwd = shuffleString(passwd);

    return passwd;
}


// Set the listener for "Generate" button
document.getElementById("generate-btn").addEventListener("click", function(){
    const generatedPasswd = generatePassword(12);
    document.getElementById("gen-passwd").value = generatedPasswd;

    // Show result area after generating password
    document.getElementById("res-area").style.visibility = "visible";
})


// Helper function to get a random number between given values
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Helper function to get random chars of given quantity from the set
function getRandomChars(charSet, count) {
    let usedChars = new Set();

    let result = '';
    for (let i = 0; i < count; i++) {
        let char;
        do {
            char = charSet[Math.floor(Math.random() * charSet.length)];
        } while (usedChars.has(char));
        usedChars.add(char);
        result += char;
    }
    return result;
}


// Shuffle string using Fisher-Yates shuffle algorithm to finalize the password
function shuffleString(str) {

    // Convert the string to an array of characters
    let arr = str.split('');
    
    // Fisher-Yates shuffle algorithm
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    // Convert the array back to a string
    return arr.join('');
}