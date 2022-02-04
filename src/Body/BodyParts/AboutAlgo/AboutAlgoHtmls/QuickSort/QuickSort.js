import React from "react";
import { PrismCode } from "../../../CodeHighlight";
import QuickSortCode from "./QuickSortCode.json";
const QuickSort = () => {
  return (
    <div
      style={{
        letterSpacing: ".015rem",
        lineHeight: "1.5",
        fontSize: "1.3em",
      }}
    >
      <h1>Quick Sort</h1>
      <p>
        Like Merge Sort QuickSort is a Divide and Conquer algorithm. It picks an
        element as pivot and partitions the given array around the picked pivot.
        There are many different versions of quickSort that pick pivot in
        different ways.&nbsp;
      </p>
      <br />
      <ol>
        <li>Always pick first element as pivot.</li>
        <li>Always pick last element as pivot (implemented below)</li>
        <li>Pick a random element as pivot.</li>
        <li>Pick median as pivot.</li>
      </ol>
      <br />
      <p>
        The key process in quickSort is partition(). Target of partitions is,
        given an array and an element x of array as pivot, put x at its correct
        position in sorted array and put all smaller elements (smaller than x)
        before x, and put all greater elements (greater than x) after x. All
        this should be done in linear time.
      </p>
      <br />

      <p>
        <strong>Pseudo Code for recursive QuickSort function :</strong>&nbsp;
      </p>
      <PrismCode
        code={QuickSortCode.PseudoCode}
        language="js"
        plugins={["line-numbers"]}
      />
      <p>
        <strong>Partition Algorithm</strong>&nbsp;
        <br />
        There can be many ways to do partition, following pseudo code adopts the
        method given in CLRS book. The logic is simple, we start from the
        leftmost element and keep track of index of smaller (or equal to)
        elements as i. While traversing, if we find a smaller element, we swap
        current element with arr[i]. Otherwise we ignore current element.&nbsp;
      </p>
      <PrismCode
        code={QuickSortCode.PartitionAlgo}
        language="js"
        plugins={["line-numbers"]}
      />
      <p>
        <strong>Pseudo code for partition()</strong>&nbsp;&nbsp;
      </p>
      <PrismCode
        code={QuickSortCode.PseudoPartition}
        language="js"
        plugins={["line-numbers"]}
      />
      <p>
        <strong>Illustration of partition() :</strong>&nbsp;
      </p>
      <PrismCode
        code={QuickSortCode.IllustrationPartition}
        language="js"
        plugins={["line-numbers"]}
      />
      <p>
        <strong>Implementation:</strong>&nbsp;
        <br />
        Following are the implementations of QuickSort:&nbsp;&nbsp;
      </p>
      <PrismCode
        code={QuickSortCode.cpp}
        language="js"
        plugins={["line-numbers"]}
      />
    </div>
  );
};

export default QuickSort;
