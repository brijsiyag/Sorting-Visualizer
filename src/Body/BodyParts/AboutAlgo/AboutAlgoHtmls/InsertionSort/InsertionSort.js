import React from "react";
import InsertionSortCode from "./InsertionSortCodes.json";
import { PrismCode } from "../../../CodeHighlight";
const InsertionSort = () => {
  return (
    <div
      style={{
        letterSpacing: ".015rem",
        lineHeight: "1.5",
        fontSize: "1.3em",
      }}
    >
      <h1>Insertion Sort</h1>
      Insertion sort is a simple sorting algorithm that works similar to the way
      you sort playing cards in your hands. The array is virtually split into a
      sorted and an unsorted part. Values from the unsorted part are picked and
      placed at the correct position in the sorted part.
      <br />
      <strong>Algorithm</strong>&nbsp;
      <br />
      To sort an array of size n in ascending order:&nbsp;
      <br />
      1: Iterate from arr[1] to arr[n] over the array.&nbsp;
      <br />
      2: Compare the current element (key) to its predecessor.&nbsp;
      <br />
      3: If the key element is smaller than its predecessor, compare it to the
      elements before. Move the greater elements one position up to make space
      for the swapped element.
      <br />
      <strong>Another Example:&nbsp;</strong>
      <br />
      <strong>12</strong>, 11, 13, 5, 6<br />
      Let us loop for i = 1 (second element of the array) to 4 (last element of
      the array)
      <br />i = 1. Since 11 is smaller than 12, move 12 and insert 11 before
      12&nbsp;
      <br />
      <strong>11, 12</strong>, 13, 5, 6<br />i = 2. 13 will remain at its
      position as all elements in A[0..I-1] are smaller than 13&nbsp;
      <br />
      <strong>11, 12, 13</strong>, 5, 6<br />i = 3. 5 will move to the beginning
      and all other elements from 11 to 13 will move one position ahead of their
      current position.&nbsp;
      <br />
      <strong>5, 11, 12, 13</strong>, 6<br />i = 4. 6 will move to position
      after 5, and elements from 11 to 13 will move one position ahead of their
      current position.&nbsp;
      <br />
      <strong>5, 6, 11, 12, 13&nbsp;</strong>
      <br />
      &nbsp;
      <PrismCode
        code={InsertionSortCode.cpp}
        language="js"
        plugins={["line-numbers"]}
      />
    </div>
  );
};

export default InsertionSort;
