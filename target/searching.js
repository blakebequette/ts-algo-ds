"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
const manualArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const randSortedArr = Array(100).fill(0).map(_ => Math.floor(Math.random() * 100));
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length;
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === target)
            return true;
        else if (arr[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return false;
}
exports.binarySearch = binarySearch;
console.log(binarySearch(manualArr, 4));
console.log(binarySearch(manualArr, 0));
console.log(binarySearch(manualArr, 10));
console.log(binarySearch(manualArr, 9));
