## What's all the fuss with sorting?

    - Its's not a big problem, when it comes to a small set of data.
    - When it gets bigger and bigger like tons of website, it becomes a problem.
    - Such as Google, Apple store, Amazon products, Microsoft data centres, Netflix shows.
    - Cannot use built-in sort(), Need custom sorted methods based on the data so that they can lower their costs and the operations their computers need to do.
    - Sort it to make it meaningful to access easily.
    - Something wrong, or in a inefficient way means losing money.

    - "https://www.toptal.com/developers/sorting-algorithms"

    **- Elemantory Sorts: Bubble Sort, Insertion Sort, Selection Sort.**

## Bubble Sort

    - Bubble up the highest number, and go to the begining and bubble up again til it's sorted.
    - One of the simplest sorting algorithm but also one of the least efficient.
    - Comparing items in nested loops one by one.
    - Time complexity: O(n^2)
    - Space complexity: O(1)

## Selection Sort

    - This works by scanning a list of items for the smallest element and then swapping that element for the one in the first position.

    - Time Complexity: O(n^2)
    - Space Complexity: O(1)

## Insertion Sort

    - Not efficient either but extremely fast in some cases.
    - Useful for times when you're pretty sure thier list is almost sorted.
    - Performs really well when it comes to small data sets.
    - Time Complexity: O(n^2)
    - Space Complexity: O(1)

## Merge Sort

    - Divider & Conquer => usually O(n log n)
    - Take the list and divide it in half.
    - and then each of subsets into half again, again until have one item.
    - Compare first item and second item.
    - kinda reversed tree. from leaf to root.
    - using recursion.

    -helpful it's stable: if the same element, keep the original order in the array.
    - Time Complexity: O(n log(n))
    - Space Complexity: **O(n)**  --> one downside of Merge sort.
    - one of efficient sorting algorithms.

## Quick Sort

    - Divider & Conquer
    - So, O(n log(n))
    - Use a pivoting technique: break the main list into smaller lists.
    - and Smaller lists use the pivoting technique until they are sorted.

    - Select a pivot randomly.
    - a smaller number than pivot should be leftside of pivot, a bigger should be its rightside.
    - After the first iteration, at least we know where the privot should be.
    - the left/right side list of the pivot should be sorted again.

    - How de we even pick the pivot point?
    - Depends on the situation. But happen to pickthe pivot point as always the last item in the array.

    - How do we code?
    - ...

    - Useful

    - Space Complexity: O(log(n)), which is really good
    - Time Complexity: O(n^2)), when the pivot is smallest, or biggest item in the list, so not splitting the list in half.
    - Picking a good pivot is important.

    - Usually the fastest on average but pretty nasty worst case behaviours.
    - If you can't guarantee a good pivot, avoid Quick sort.

## Stability in sorting algorithms

    - "https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important"

## Which sort is the best?

### Insertion Sort

    - Should be used with only a few items.
    - When input is small, or items are mostly sorted, it is fast

### Bubble Sort

    - Never gonna use Bubble Sort in real.
    - Used for educational purposes.
    - Not very efficient.

### Selection Sort

    - Never gonna use Selection Sort in real life.

### Merge Sort

    - Divide and Conquer, so it is fast.
    - Best and Wort case is the same O(n log(n)).
    - If you're worring about the Worst case, use this.
    - But Space complexity is very expensive. O(n)

### Quick Sort

    - Better than Merge Sort in Space Complexity and average case.
    - But one downside is the Worst case, if you don't pick a pivot properly.

### Heap Sort

    - Usually slower
    - You might use it if you're worrying about Worst case and space complexity.
    - "https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort"

## Non-Comparison Sort

    - It is impossible to beat O(n log n) mathematically.
    - You can improve this if you don't make comparisons.

    - Counting Sort
    - Radix Sort

    - Only worked with numbers, specifically integers, in a restiricted range.
    - Using the way numbers are stored on memory.

    - "https://brilliant.org/wiki/radix-sort/"
    - "https://www.cs.usfca.edu/~galles/visualization/RadixSort.html"

    - "https://brilliant.org/wiki/counting-sort/"
    - "https://www.cs.usfca.edu/~galles/visualization/CountingSort.html"

## Sorting Interview

    #1 - Sort 10 schools around your house by distance
        :Insertion Sort, small inputs, easy to code

    #2 - eBay sorts listing by the current Bid amount
        :Radix or Counting Sort, as amount are numbers, knowing that bids are always going to be number withn a certain range.

    #3 - Sport scores on ESPN
        : Quick Sort, as diffrernt formats on varios sports

    #4 - Massive database (can't fit all into memory) needs to sort through past year's user data
        :Merge Sort, as might sort out externally, tons of data worring about the performance.

    #5 - Almost sorted Udemy review data needs to update and add 2 new reviews
        :Insersion Sort, as already presorted

    #6 - Temperature Records for the past 50 years in Canada
        :Radix, Couting Sort if there is no decimal places.
        : Quick Sort space complexity with decimal places

    #7 - Large username database needs to be sorted. Data is very random.
        : Merge Sort if we have enough memory, and not expensive
        : Quick Sort if not worried about worst case, and not that large

    #8 - You want to teach sorting for the first time
        :Bubble Sort, Selection Sort

## ECMAScript in JavaScript does not mention how .sort() should be implemented.

    - Depends on browers

    - Chrom V8: Quick, Insertion Sort.
    - Mozilla: Merge Sort
