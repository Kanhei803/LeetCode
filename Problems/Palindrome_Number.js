// Given an integer x, return true if x is a 
// palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    x = x.toString();
    let k = x.length;
    for (let i = 0; i < k; i++) {
        if (x[i] != x[k - 1]) {
            return false;
        }
        k--;
    }
    return true;
};