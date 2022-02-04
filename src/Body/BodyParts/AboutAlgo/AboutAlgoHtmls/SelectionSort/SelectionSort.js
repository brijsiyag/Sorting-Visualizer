import React from "react";
import { PrismCode } from "../../../CodeHighlight";
import SelectionSortCode from "./SelectionSortCode.json";
const SelectionSort = () => {
  return (
    <div
      style={{
        letterSpacing: ".015rem",
        lineHeight: "1.5",
        fontSize: "1.3em",
      }}
    >
      <h1>Selection Sort</h1>
      <p>
        The selection sort algorithm sorts an array by repeatedly finding the
        minimum element (considering ascending order) from unsorted part and
        putting it at the beginning. The algorithm maintains two subarrays in a
        given array.
        <br />
        1) The subarray which is already sorted.&nbsp;
        <br />
        2) Remaining subarray which is unsorted.
        <br />
        In every iteration of selection sort, the minimum element (considering
        ascending order) from the unsorted subarray is picked and moved to the
        sorted subarray.&nbsp;
        <br />
        Following example explains the above steps:&nbsp;
        <br />
        &nbsp;
      </p>
      <PrismCode
        code={SelectionSortCode.PseudoCode}
        language="js"
        plugins={["line-numbers"]}
      />
      <p>
        <strong>Flowchart of the Selection Sort:</strong>&nbsp;
        <br />
        &nbsp;
      </p>
      <p>
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220203094305/Selection-Sort-Flowhchart.png"
          alt="Selection-Sort-Flowhchart"
          width="100%"
        />
      </p>
      <p>
        <strong>Implementation:</strong>&nbsp;
        <br />
        Following are the implementations of Selection Sort:&nbsp;&nbsp;
      </p>
      <PrismCode
        code={SelectionSortCode.cpp}
        language="js"
        plugins={["line-numbers"]}
      />
      <p>
        <strong>Time Complexity:</strong> O(n<sup>2</sup>) as there are two
        nested loops.
        <br />
        <strong>Auxiliary Space:</strong> O(1)&nbsp;
        <br />
        The good thing about selection sort is it never makes more than O(n)
        swaps and can be useful when memory write is a costly operation.&nbsp;
        <br />
        <strong>Exercise :&nbsp;</strong>
        <br />
        <a href="https://www.geeksforgeeks.org/c-program-to-sort-an-array-of-strings-using-selection-sort-2/">
          Sort an array of strings using Selection Sort
        </a>
        <br />
        <a href="https://www.geeksforgeeks.org/stability-in-sorting-algorithms/">
          Stability :{" "}
        </a>
        The default implementation is not stable. However it can be made stable.
        Please see{" "}
        <a href="https://www.geeksforgeeks.org/stable-selection-sort/">
          stable selection sort
        </a>{" "}
        for details.
        <br />
        <strong>In Place : </strong>Yes, it does not require extra space.
        <br />
        &nbsp;&nbsp;
        <br />
        &nbsp;
      </p>
    </div>
  );
};

export default SelectionSort;
