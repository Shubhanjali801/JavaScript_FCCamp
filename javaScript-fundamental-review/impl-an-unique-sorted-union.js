function uniteUnique(...arrays) {
    const combinedArray = [].concat(...arrays);
    const uniqueArray = [];
    for (let item of combinedArray) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }
    return uniqueArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));


// https://www.freecodecamp.org/learn/javascript-v9/lab-unique-sorted-union/implement-a-unique-sorted-union