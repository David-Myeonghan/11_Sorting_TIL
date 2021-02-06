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
