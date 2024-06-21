/** product: calculate the product of an array of numbers. */

function product(nums) {
    //Base Case
    if(nums.length === 0) return 1;
    // Normal Case
    return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, ind =0, max = 0) {
     //Base Case
     if(ind === words.length) return max;
    // Normal Case
    max = Math.max(words[ind].length, max);
    return longest(words,ind +1, max)
  
//    words[0] + longest(words.slice(1))
  
   
    // let len = words.length;
    // let max = -Infinity;
    // while(len--){
    //     if(words[len] > max) {
    //         max = words[len]
    //     }
    // }

    // return max;

}

/** everyOther: return a string with every other letter. */

function everyOther(str, ind = 0,newStr = "") {
     //Base Case
     if( ind >= str.length ) return newStr;
    // Normal Case
    newStr += str[ind];
    return everyOther(str,ind + 2, newStr)
    //  str.at(0) + everyOther(str.slice(1))
    // while(ind <= str.length){
    //     console.log(str[ind] % 2 === 0)
    // }
    // return str.concat(str[ind] % 2 === 0)
    // if(str[ind] % 2 === 0){

    // }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, ind =0) {
     //Base Case
    
    // Normal Case
    let left = ind;
    let right = str.length-1 - ind;
    if(left>= right) return true;
    if(str[left] !== str[right]) return false;
   

    return isPalindrome(str, ind + 1)

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, ind = 0) {
     //Base Case
     if(arr.length === ind) return -1;
    // Normal Case
    if(arr[ind] === val) return ind;
    return findIndex(arr, val, ind + 1)

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, ind = 0, newStr= "") {
     //Base Case
     if(newStr.length === str.length) return newStr;
    
    // Normal Case
    newStr += str[str.length-1 - ind]
    return revString(str,ind + 1, newStr);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    let strings = [];
    for (key in obj){
        console.log(key, "key")
        console.log(obj[key])
        if(typeof obj[key] === "string") strings.push(obj[key]);
        if(typeof obj[key] === "object")  strings.push(...gatherStrings(obj[key]));
    }

    return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
