import React, { useState } from "react";
import Header from "./Header";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function App() {
  const [speed, setSpeed] = useState(600);
  let [arr, setArr] = useState([]);
  let [order, setOrder] = useState({});
  let [color, setColor] = useState({});
  const letters = "0123456789ABCDEF";
  function clickHandler() {
    let arrTemp = [],
      orderTemp = {},
      colorTemp = {};
    for (let i = 0; i < 50; i++) {
      let colorTemptemp = "#";
      for (let i = 0; i < 6; i++) {
        colorTemptemp += letters[Math.floor(Math.random() * 16)];
      }
      arrTemp.push(Math.floor(Math.random() * 40 + 10));
      orderTemp[arrTemp[i]] = i;
      colorTemp[arrTemp[i]] = colorTemptemp;
    }
    setArr([...arrTemp]);
    setOrder(orderTemp);
    setColor(colorTemp);
    console.log(arr);
  }

  function sorter() {
    insertionSort();
  }
  let i = 1,
    key,
    j;
  function insertionSort() {
    setTimeout(function () {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
        order[arr[j]] = j + 1;
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      order[key] = j + 1;
      arr[j + 1] = key;
      setArr([...arr]);
      setOrder({ ...order });
      i++;
      if (i < arr.length) {
        insertionSort();
      }
    }, speed);
  }

  function speedHandler(e) {
    setSpeed(1580 - e.target.value);
    console.log(1600 - e.target.value);
  }
  return (
    <div>
      <Header />
      <div className="handler">
        <button onClick={clickHandler} className="randomArrGen">
          Generate Array
        </button>
        <button onClick={sorter} className="sort">
          Sort
        </button>
        <div className="speedController">
          Speed
          <input
            onChange={speedHandler}
            type="range"
            name="speed"
            id="speed"
            min="100"
            max="1500"
            value={1580 - speed}
          />
        </div>
      </div>
      <div className="container">
        {arr.map((item) => {
          return (
            <div
              className="bar"
              style={{
                order: order[item],
                height: item * 10,
                backgroundColor: color[item],
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
