// Unique Characters 
function uniqueChars(str) {
    let phrase = {};
    for (let i = 0; i < str.length; i++) {
        if(phrase.hasUniqueChars(str['Zach'])) {
            return true;
        } else { return false; }    
    }
    return phrase
}

console.log(uniqueChars('Zach is amazing!'))

// runtime of this code should be O(n) because we don't know how many strings containing Zach the phrase will have.
// If we're soley basing it off of what's in the console.log it would be a O(1).

// code does not run T^T