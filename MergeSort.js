const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
	if (array.length === 1) {
		return array;
	}
	// Split Array in into right and left
	const middle = Math.floor(array.length / 2);
	let left = array.slice(0, middle);
	let right = array.slice(middle);
	// array.slice(length) => [] empty array, Not undefiend!

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let resultArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] > right[rightIndex]) {
			resultArray.push(right[rightIndex]);
			rightIndex++;
		} else {
			resultArray.push(left[leftIndex]);
			leftIndex++;
		}
	}

	// without slice(), returns undefined.
	return resultArray.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);
