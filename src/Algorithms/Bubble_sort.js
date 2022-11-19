import SetInterval from "./SetInterval";
var running = true;
const BubbleSort = async (arr, setIsDisabled) => {
  return await new Promise(async (resolve) => {
    document.querySelector(".stop-btn").addEventListener("click", () => {
      running = false;
    });
    var i = 0,
      j = 0,
      flag = true;
    SetInterval((clearMyInterval) => {
      if (!running) {
        setIsDisabled(false);
        running = true;
        clearMyInterval();
        resolve(true);
        return;
      }
      if (flag) {
        document.querySelectorAll(".green").forEach((element) => {
          element.classList.remove("green");
        });
        let first = document.querySelector(`#id${arr[j].id}`);
        let second = document.querySelector(`#id${arr[j + 1].id}`);
        second.classList.add("green");
        first.classList.add("green");
        flag = false;
      } else if (j < arr.length - i - 1) {
        if (arr[j].value > arr[j + 1].value) {
          let first = document.querySelector(`#id${arr[j].id}`);
          let second = document.querySelector(`#id${arr[j + 1].id}`);
          [first.style.transform, second.style.transform] = [
            second.style.transform,
            first.style.transform,
          ];
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
        j++;
        if (j !== arr.length - i - 1) {
          flag = true;
        }
      } else if (i >= arr.length) {
        resolve(true);
        setIsDisabled(false);
        clearMyInterval();
        return;
      } else {
        document.querySelectorAll(".green").forEach((element) => {
          element.classList.remove("green");
        });
        document
          .querySelector(`#id${arr[arr.length - i - 1].id}`)
          .classList.add("yellow");
        i++;
        j = 0;
        flag = true;
      }
    });
  });
};

export default BubbleSort;
