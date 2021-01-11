const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
	let temp;

	for (let i = array.length; i < 0; i--) {
		for (let j = 1; j <= i; j++) {
			if (array[j - 1] > array[j]) {
				temp = array[j];
				array[j] = array[j - 1];
				array[j - 1] = temp;
				console.log(array.length);
			} else {
				continue;
			}
		}
	}

	// What a shame!!!!!!!! What a Bummer!

	// for (let i = 0; i < array.length; i++) {
	// 	for (let j = i + 1; j < array.length; j++) {
	// 		if (array[i] < array[j]) {
	// 			continue;
	// 		} else if (array[i] > array[j]) {
	// 			temp = array[j];
	// 			array[j] = array[i];
	// 			array[i] = temp;
	// 		}
	// 		continue;
	// 	}
	// }
}

function bubbleSortSolution(array) {
	const length = array.length;

	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			if (array[j] > array[j + 1]) {
				// Swap
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
}
// Space: O(1)
// Time: O(n^2)

bubbleSortSolution(numbers);
console.log(numbers);
