import React from "react";
import { PrismCode } from "../../../CodeHighlight";
import MergeSortCode from "./MergeSortCode.json";
const MergeSort = () => {
  return (
    <div
      style={{
        letterSpacing: ".015rem",
        lineHeight: "1.5",
        fontSize: "1em",
      }}
    >
      <h1>Merge Sort</h1>
      <p>
        Like QuickSort , Merge Sort is a Divide and Conquer algorithm. It
        divides the input array into two halves, calls itself for the two
        halves, and then merges the two sorted halves.{" "}
        <strong>The merge() function</strong> is used for merging two halves.
        The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and
        arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.
        See the following C implementation for details.
      </p>
      <PrismCode
        code={MergeSortCode.Pseudo}
        language="js"
        plugins={["line-numbers"]}
      />
      <div style={{ display: "flex" }}>
        <p>
          The following diagram from{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="http://en.wikipedia.org/wiki/File:Merge_sort_algorithm_diagram.svg"
          >
            wikipedia
          </a>{" "}
          shows the complete merge sort process for an example array{" "}
          {(38, 27, 43, 3, 9, 82, 10)}. If we take a closer look at the diagram,
          we can see that the array is recursively divided into two halves till
          the size becomes 1. Once the size becomes 1, the merge processes come
          into action and start merging arrays back till the complete array is
          merged.
          <br />
          &nbsp;
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/1236px-Merge_sort_algorithm_diagram.svg.png"
          alt="merge_sort_image"
          style={{ width: "200%" }}
        />
      </div>
      <p>
        <strong>Implementation:</strong>&nbsp;
        <br />
        Following are the implementations of Merge Sort:&nbsp;&nbsp;
      </p>
      <PrismCode
        code={MergeSortCode.cpp}
        language="js"
        plugins={["line-numbers"]}
      />
      <p>
        <strong>Time Complexity:</strong> Sorting arrays on different machines.
        Merge Sort is a recursive algorithm and time complexity can be expressed
        as following recurrence relation.&nbsp;
        <br />
        T(n) = 2T(n/2) + θ(n)
      </p>
      <p>
        The above recurrence can be solved either using the Recurrence Tree
        method or the Master method. It falls in case II of Master Method and
        the solution of the recurrence is θ(nLogn).&nbsp;Time complexity of
        Merge Sort is &nbsp;θ(nLogn) in all 3 cases (worst, average and best) as
        merge sort always divides the array into two halves and takes linear
        time to merge two halves.
        <br />
        <strong>Auxiliary Space:</strong> O(n)
        <br />
        <strong>Algorithmic Paradigm: </strong>Divide and Conquer
        <br />
        <strong>Sorting In Place:</strong> No in a typical implementation
        <br />
        <strong>Stable:</strong> Yes
      </p>
    </div>
  );
};

export default MergeSort;
