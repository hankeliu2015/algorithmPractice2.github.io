function insertionSort(array) {
  // start at the first index and iterate through to the end
  for (let i = 1; i < array.length; i++) {
    let currentIndex = i
    /*
     * Check:
     *      1. that currentIndex is at least 1
     *      2. that the item directly before the currentIndex is greater than the item at currentIndex
     *
     * If both conditions are met, swap the indexes
     */
    while (currentIndex > 0 && array[currentIndex - 1] > array[currentIndex]) {
      let temp = array[currentIndex]
      array[currentIndex] = array[currentIndex - 1]
      array[currentIndex - 1] = temp
      currentIndex--
    }
  }
}

let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
insertionSort(array)
console.log(array)
