const letters = ["a", "z", "g", "b", "e", "d"];
const basket = [2, 65, 34, 2, 1, 7, 8];

console.log(basket.sort());
//JS sort() converts numbers into character code(Uni-Code) and then compare the first letterand sort them.
console.log("2".charCodeAt(0));
console.log("65".charCodeAt(0));
console.log("34".charCodeAt(0));
console.log("7".charCodeAt(0));

console.log(
	basket.sort(function (a, b) {
		return a - b;
	})
);

// When it comes to different language, use localeCompare();
// There are many ways of sorting.
