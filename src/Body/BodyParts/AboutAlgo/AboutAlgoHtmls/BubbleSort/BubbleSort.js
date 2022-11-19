import React from "react";
import { PrismCode } from "../../../CodeHighlight";
import BubbleSortCode from "./BubbleSortCodes.json";
const BubbleSort = () => {
  return (
    <div
      style={{
        letterSpacing: ".015rem",
        lineHeight: "1.5",
        fontSize: "1.3em",
      }}
    >
      <h1>Bubble Sort</h1>
      <p>
        Bubble Sort is the simplest sorting algorithm that works by repeatedly
        swapping the adjacent elements if they are in wrong order.
        <br />
        <strong>Example:</strong>&nbsp;
        <br />
        <strong>First Pass:</strong>&nbsp;
        <br />( <strong>5</strong> <strong>1</strong> 4 2 8 ) –&gt; ({" "}
        <strong>1</strong> <strong>5</strong> 4 2 8 ), Here, algorithm compares
        the first two elements, and swaps since 5 &gt; 1.&nbsp;
        <br />( 1 <strong>5</strong> <strong>4</strong> 2 8 ) –&gt;&nbsp; ( 1{" "}
        <strong>4</strong> <strong>5</strong> 2 8 ), Swap since 5 &gt; 4&nbsp;
        <br />( 1 4 <strong>5</strong> <strong>2</strong> 8 ) –&gt;&nbsp; ( 1 4{" "}
        <strong>2</strong> <strong>5</strong> 8 ), Swap since 5 &gt; 2&nbsp;
        <br />( 1 4 2 <strong>5</strong> <strong>8</strong> ) –&gt; ( 1 4 2{" "}
        <strong>5</strong> <strong>8</strong> ), Now, since these elements are
        already in order (8 &gt; 5), algorithm does not swap them.
        <br />
        <strong>Second Pass:</strong>&nbsp;
        <br />( <strong>1 4</strong> 2 5 8 ) –&gt; ( <strong>1</strong>{" "}
        <strong>4</strong> 2 5 8 )&nbsp;
        <br />( 1 <strong>4</strong> <strong>2</strong> 5 8 ) –&gt; ( 1{" "}
        <strong>2</strong> <strong>4</strong> 5 8 ), Swap since 4 &gt; 2&nbsp;
        <br />( 1 2 <strong>4</strong> <strong>5</strong> 8 ) –&gt; ( 1 2{" "}
        <strong>4</strong> <strong>5</strong> 8 )&nbsp;
        <br />( 1 2 4 <strong>5</strong> <strong>8</strong> ) –&gt;&nbsp; ( 1 2
        4 <strong>5</strong> <strong>8</strong> )&nbsp;
        <br />
        Now, the array is already sorted, but our algorithm does not know if it
        is completed. The algorithm needs one <strong>whole</strong> pass
        without <strong>any</strong> swap to know it is sorted.
        <br />
        <strong>Third Pass:</strong>&nbsp;
        <br />( <strong>1</strong> <strong>2</strong> 4 5 8 ) –&gt; ({" "}
        <strong>1</strong> <strong>2</strong> 4 5 8 )&nbsp;
        <br />( 1 <strong>2</strong> <strong>4</strong> 5 8 ) –&gt; ( 1{" "}
        <strong>2</strong> <strong>4</strong> 5 8 )&nbsp;
        <br />( 1 2 <strong>4</strong> <strong>5</strong> 8 ) –&gt; ( 1 2{" "}
        <strong>4</strong> <strong>5</strong> 8 )&nbsp;
        <br />( 1 2 4 <strong>5</strong> <strong>8</strong> ) –&gt; ( 1 2 4{" "}
        <strong>5</strong> <strong>8</strong> )&nbsp;
        <br />
        &nbsp;
      </p>
      <p>
        Following is the implementations of Bubble Sort.&nbsp;
        <br />
        &nbsp;
      </p>
      <PrismCode
        code={BubbleSortCode.cpp}
        language="js"
        plugins={["line-numbers"]}
      />
      <p>
        &lt;!—-<strong>Illustration :&nbsp;</strong>
        <br />
        &nbsp;
      </p>
      <p>
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2014/02/bubble-sort1.png"
          alt="bubble-sort"
        />
      </p>
      <p>
        —&gt;
        <br />
        <strong>Optimized Implementation:</strong>&nbsp;
        <br />
        The above function always runs O(n^2) time even if the array is sorted.
        It can be optimized by stopping the algorithm if inner loop didn’t cause
        any swap.&nbsp;
        <br />
        &nbsp;
      </p>
      <PrismCode
        code={BubbleSortCode["cpp-optimized"]}
        language="js"
        plugins={["line-numbers"]}
      />
      <p>
        <strong>Worst and Average Case Time Complexity: </strong>O(n*n). Worst
        case occurs when array is reverse sorted.
        <br />
        <strong>Best Case Time Complexity:</strong> O(n). Best case occurs when
        array is already sorted.
        <br />
        <strong>Auxiliary Space:</strong> O(1)
        <br />
        <strong>Boundary Cases:</strong> Bubble sort takes minimum time (Order
        of n) when elements are already sorted.
        <br />
        <strong>Sorting In Place: </strong>Yes
        <br />
        <strong>Stable:</strong> Yes
        <br />
        Due to its simplicity, bubble sort is often used to introduce the
        concept of a sorting algorithm.&nbsp;
        <br />
        In computer graphics it is popular for its capability to detect a very
        small error (like swap of just two elements) in almost-sorted arrays and
        fix it with just linear complexity (2n). For example, it is used in a
        polygon filling algorithm, where bounding lines are sorted by their x
        coordinate at a specific scan line (a line parallel to x axis) and with
        incrementing y their order changes (two elements are swapped) only at
        intersections of two lines (Source:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="http://en.wikipedia.org/wiki/Bubble_sort#In_practice"
        >
          Wikipedia
        </a>
        )<br />
        &nbsp;&nbsp;
        <br />
        &nbsp;
      </p>
    </div>
  );
};

export default BubbleSort;
