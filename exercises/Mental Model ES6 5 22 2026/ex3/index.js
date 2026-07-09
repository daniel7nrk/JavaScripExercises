function flattenAndUnique(arr) {
    const flattened = arr.flat(Infinity);
    return [...new Set(flattened)];
}

const nestedArray = [1, [2, 3], 4, [2, [5, 1]], 3];
const result = flattenAndUnique(nestedArray);
console.log(result); // Output: [1, 2, 3, 4, 5]