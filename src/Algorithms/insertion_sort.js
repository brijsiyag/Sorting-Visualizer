import SetInterval from "./SetInterval";
var running = true;
const insertion_sort = async (arr, setIsDisabled) => {
  return await new Promise((resolve, reject) => {
    document.querySelector(".stop-btn").addEventListener("click", () => {
      running = false;
    });
    let i = 1,
      j = 0;
    document.querySelector(`#id2`).classList.add("green");
    SetInterval((clearMyInterval) => {
      if (!running) {
        clearMyInterval();
        resolve(true);
        setIsDisabled(false);
        running = true;
      }
      if (j >= 0 && arr[j].value > arr[j + 1].value) {
        let first = document.querySelector(`#id${arr[j].id}`);
        let second = document.querySelector(`#id${arr[j + 1].id}`);
        [first.style.transform, second.style.transform] = [
          second.style.transform,
          first.style.transform,
        ];
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        j--;
      } else if (i >= arr.length - 1) {
        resolve(true);
        clearMyInterval();
        setIsDisabled(false);
      } else {
        document.querySelectorAll(".green").forEach((element) => {
          element.classList.remove("green");
        });
        i++;
        j = i - 1;
        document.querySelector(`#id${i + 1}`).classList.add("green");
      }
    });
  });
};

export default insertion_sort;
