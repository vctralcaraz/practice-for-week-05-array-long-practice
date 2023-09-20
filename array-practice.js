const findMinimum = arr => {

  // Your code here
  let min = arr[0]; // O(1)

  for(let i = 1; i < arr.length; i++) { // O(n)
    let el = arr[i]; // O(1)

    if(el < min) {
      min = el; // O(1)
    }
  }

  return min; // O(1)
};
// time complexity: O(n)
// space complexity: O(1)

const runningSum = arr => {

  // Your code here
  if(arr.length === 0) {
    return []; // O(1)
  }

  let arr2 = []; // O(1)
  arr2.push(arr[0]); // O(1)

  for(let i = 1; i < arr.length; i++) { // O(n)
    arr2.push((arr[i] + arr2[i - 1])); // O(1)
  }

  return arr2; // O(1)
};
// time complexity: O(n)
// space complexity: O(1)

const evenNumOfChars = arr => {

  // Your code here
  let count = 0; // O(1)

  for(let i = 0; i < arr.length; i++) { // O(n)
    let el = arr[i]; // O(1)

    if(el.length % 2 === 0) {
      count++; // O(1)
    }
  }

  return count; // O(1)
};
// time complexity: O(n)
// space complexity: O(1)

const smallerThanCurr = arr => {

  // Your code here
  let count; // O(1)
  let counts = []; // O(1)

  for(let i = 0; i < arr.length; i++) { // O(n)
    let el = arr[i]; // O(1)
    count = 0; // O(1)

    for(let j = 0; j < arr.length; j++) { // O(n)
      let el2 = arr[j]; // O(1)

      if(el2 < el) {
        count++; // O(1)
      }
    }

    counts.push(count); // O(1)
  }

  return counts; // O(1)
};
// time complexity: O(n^2)
// space complexity: O(1)

const twoSum = (arr, target) => {

  // Your code here
  let targeted = false; // O(1)

  for(let i = 0; i < arr.length; i++) { // O(n)
    let el = arr[i]; // O(1)

    for(let j = i + 1; j < arr.length; j++) { // O(1)? because we never go through the full array??
      let el2 = arr[j]; // O(1)

      if(el + el2 === target) {
        targeted = true; // O(1)
      }
    }

  }

  return targeted; // O(1)
};
// time complexity: O(n)
// space complexity: O(1)

const secondLargest = arr => {

  // Your code here
  if(arr.length <= 1) {
    return undefined; // O(1)
  }

  let largest = arr[0]; // O(1)
  let second; // O(1)

  for(let i = 1; i < arr.length; i++) { // O(n)
    let el = arr[i]; // O(1)

    if(el >= largest) {

      second = largest; // O(1)
      largest = el; // O(1)
    } else if(second === undefined || el > second) {

      second = el; // O(1)
    }
  }

  return second; // O(1)

}
// time complexity: O(n)
// space complexity: O(n)? due to the second and largest swap??

const shuffle = (arr) => {

  // Your code here
  let shuffled = arr.slice(); // O(n)
  
  for(let i = shuffled.length - 1; i >= 0; i--) { // O(n)
    let j = Math.floor(Math.random() * (i + 1)); // O(1)
    let temp = shuffled[i]; // O(1)
    shuffled[i] = shuffled[j]; // O(1)
    shuffled[j] = temp; // O(1)
  }

  return shuffled; // O(1)
};
// time complexity: O(n)
// space complexity: O(n) due to the arr.slice duplicating the array


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];