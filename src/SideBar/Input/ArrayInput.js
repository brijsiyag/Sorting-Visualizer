import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./ArrayInput.css";
import { useDispatch, useSelector } from "react-redux";
import { setArr } from "../../features/SortingSlice";

const ArrayInput = () => {
  const dispatch = useDispatch();
  let { arr, isDisabled } = useSelector((state) => {
    return state.sortingVisualizer;
  });
  const [inputArr, setinputArr] = useState("");
  useEffect(() => {
    let tempIntputArr = "";
    arr.forEach((element) => {
      tempIntputArr += `${element.value},`;
    });
    setinputArr(tempIntputArr);
  }, [arr]);
  const inputChangeHandler = (e) => {
    setinputArr(e.target.value);
  };
  const inputChangeBtnHandler = () => {
    let tempArr = inputArr.slice(0, inputArr.length).split(",");
    tempArr = tempArr.filter((element) => {
      return Number.isInteger(parseInt(element));
    });
    //79 is Max Height of a bar in Redux SortingSlice Array Generator
    tempArr.map((element, index) => {
      return (tempArr[index] = parseInt(element) > 79 ? 79 : parseInt(element));
    });
    dispatch(setArr(tempArr));
  };
  const shuffleArray = () => {
    const tempArr = [...arr];
    tempArr.map((element, index) => {
      return (tempArr[index] = element.value);
    });
    for (var i = tempArr.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }
    dispatch(setArr(tempArr));
  };
  return (
    <div className="array-input-container">
      <label className="array-input-label" htmlFor="array-input">
        Custom Array
      </label>
      <textarea
        rows="2"
        value={inputArr}
        placeholder="Custom Array"
        id="array-input"
        className="array-input"
        onChange={inputChangeHandler}
      />
      <Button
        disabled={isDisabled}
        style={{ color: "white", border: isDisabled && "1px solid white" }}
        onClick={inputChangeBtnHandler}
        className="input-array-btn"
        variant="contained"
        color="primary"
      >
        Generate
      </Button>
      <Button
        disabled={isDisabled}
        style={{ color: "white", border: isDisabled && "1px solid white" }}
        onClick={shuffleArray}
        className="shuffle-array-btn"
        variant="contained"
        color="info"
      >
        Shuffle
      </Button>
    </div>
  );
};

export default ArrayInput;
