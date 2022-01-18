import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./ArrayInput.css";
import { useDispatch, useSelector } from "react-redux";
import { setArr, setSize } from "../../features/SortingSlice";
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
    const tempArr = inputArr.slice(0, inputArr.length - 1).split(",");
    dispatch(setSize(tempArr.length));
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
    </div>
  );
};

export default ArrayInput;
