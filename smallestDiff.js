const smallestDiff = (arr1, arr2) => {
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);

    let smallest = null;

    let index1 = 0;
    let index2 = 0;

    while (index1 < arr1.length && index2 < arr2.length) {
        let difference = arr1[index1] - arr2[index2];
        if (difference === 0) {
            return 0;
        }
        if (smallest === null || difference < smallest) {
            smallest = difference;
        }
        if (arr1[index1] > arr2[index2]) {
            index2++
        } else {
            index1++
        }
    }
    return smallest
}

console.log(smallestDiff([30, 23, 54, 33, 96], [10, 20, 14, 16, 18]))