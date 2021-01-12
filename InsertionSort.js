const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
	let length = array.length;

	for (let i = 0; i < length; i++) {
		for (let j = i; j !== 0; j--) {
			if (array[i] > array[i + 1]) {
				// Swap
				let temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				if (j > -1 && array[j - 1] > array[j]) {
					// Swap
					let temp2 = array[j - 1];
					array[j - 1] = array[j];
					array[j] = temp2;
				} else {
					break;
				}
			}
		}
	}
}

function insertionSortSolution(array) {
	const length = array.length;

	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
			// Move number to the first position
			array.unshift(array.splice(i, 1)[0]);
		} else {
			// Find where number should go
			for (let j = 1; j < i; j++) {
				if (array[i] > array[j - 1] && array[i] < array[j]) {
					// Move number to the right spot
					array.splice(j, 0, array.splice(i, 1)[0]);
				}
			}
		}
	}
}

function insertionSortSolution2(array) {
	// copy array
	let result = [...array];
	let length = array.length; // 정렬된 부분의 현재 인덱스

	for (let i = 1; i < length; i++) {
		let current = array[i];
		let left = i - 1;

		while (left >= 0 && array[left] > current) {
			array[left + 1] = array[left];
			left--;
		}

		// 임시로 저장한 현재값을 정렬된 부분의 인덱스에 부여
		array[left + 1] = current;
	}
	return result;
}

insertionSortSolution2(numbers);
console.log(numbers);
