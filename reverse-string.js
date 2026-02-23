// Reverse a String
const reverseString = (str) => {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello')); // Output: 'olleh'


// check palindrome
const isPalindrome = (str) => {
    return str === reverseString(str);
}

console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false


//Factorial

const factorial = (n) => {
    if(n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120