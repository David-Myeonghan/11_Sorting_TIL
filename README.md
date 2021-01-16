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

## Quick Sort

    - Divider & Conquer
