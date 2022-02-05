import React, { useEffect } from "react";
import InsertionSort from "./AboutAlgoHtmls/InsertionSort/InsertionSort";
import QuickSort from "./AboutAlgoHtmls/QuickSort/QuickSort";
import MergeSort from "./AboutAlgoHtmls/MergeSort/MergeSort";
import SelectionSort from "./AboutAlgoHtmls/SelectionSort/SelectionSort";
import BubbleSort from "./AboutAlgoHtmls/BubbleSort/BubbleSort";
import { useSelector } from "react-redux";
const AlgoReturn = ({ algo }) => {
  switch (algo) {
    case 0:
      return <InsertionSort />;
    case 1:
      return <BubbleSort />;
    case 2:
      return <SelectionSort />;
    case 3:
      return <MergeSort />;
    case 4:
      return <QuickSort />;
    default:
      return <h1>Error...</h1>;
  }
};

const AboutAlgo = () => {
  const { algo } = useSelector((state) => {
    return state.sortingVisualizer;
  });
  return (
    <div>
      <p style={{ position: "absolute", top: "0", right: "0", padding: "7px" }}>
        {" "}
        ©{" "}
        <a
          href="https://www.geeksforgeeks.org/"
          rel="noreferrer"
          target="_blank"
        >
          GeeksForGeeks
        </a>
      </p>
      <AlgoReturn algo={algo} />
    </div>
  );
};

export default AboutAlgo;
