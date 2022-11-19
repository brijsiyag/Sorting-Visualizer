import store from "../app/store";
import SetInterval from "./SetInterval";
var running = true;

const elementSelect = (id) => {
  return document.querySelector(`#id${id}`);
};

const removeClasses = (classNames) => {
  classNames.forEach((className) => {
    document.querySelectorAll(`.${className}`)?.forEach((element) => {
      element.classList.remove(className);
    });
  });
};

const addClass = (low, high, arr, className) => {
  for (let i = low; i <= high; i++) {
    elementSelect(arr[i].id).classList.add(className);
  }
};

const delay = async (time) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const styleSwap = (id1, id2) => {
  let first = elementSelect(id1);
  let second = elementSelect(id2);
  [first.style.transform, second.style.transform] = [
    second.style.transform,
    first.style.transform,
  ];
};

const getPivot = (low, high, pivot) => {
  if (pivot === 0) {
    return low;
  } else if (pivot === 1) {
    return high;
  } else if (pivot === 2) {
    return Math.floor((low + high) / 2);
  } else {
    return Math.floor(Math.random() * (high - low + 1) + low);
  }
};

const partition = async (arr, low, high, pivot) => {
  return await new Promise(async (resolve, reject) => {
    const pivot_index = getPivot(low, high, pivot);
    elementSelect(arr[pivot_index].id)?.classList.add("red");
    await delay(store.getState().sortingVisualizer.speed);
    styleSwap(arr[pivot_index].id, arr[high].id);
    [arr[pivot_index], arr[high]] = [arr[high], arr[pivot_index]];
    let pivot_value = arr[high].value;
    await delay(store.getState().sortingVisualizer.speed);
    let i = low - 1,
      j = low;
    SetInterval((clearMyInterval) => {
      if (!running) {
        clearMyInterval();
        resolve(0);
      }
      if (j >= high) {
        if (j === high) {
          styleSwap(arr[i + 1].id, arr[high].id);
          [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        } else {
          elementSelect(arr[i + 1].id).classList.add("yellow");
          resolve(i + 1);
          clearMyInterval();
        }
      } else if (arr[j]?.value <= pivot_value) {
        i++;
        styleSwap(arr[i].id, arr[j].id);
        let second = elementSelect(arr[j].id);
        second.classList.add("green");
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      if (j < high) {
        elementSelect(arr[j]?.id)?.classList.add("purple");
      }
      j++;
    });
  });
};
const qSort = async (arr, low, high, pivot) => {
  if (low < high && running) {
    await delay(store.getState().sortingVisualizer.speed);
    addClass(low, high, arr, "blue");
    let pi = running && (await partition(arr, low, high, pivot));
    removeClasses(["green", "red", "purple", "blue"]);
    running && (await qSort(arr, low, pi - 1, pivot));
    removeClasses(["green", "red", "purple", "blue"]);
    running && (await qSort(arr, pi + 1, high, pivot));
  } else if (running) {
    elementSelect(arr[low]?.id)?.classList.add("yellow");
    elementSelect(arr[high]?.id)?.classList.add("yellow");
  }
};

const Quick_sort = async (arr, setIsDisabled, pivot) => {
  document.querySelector(".stop-btn").addEventListener("click", () => {
    running = false;
  });
  await qSort(arr, 0, arr.length - 1, pivot);
  running && (await delay(2 * store.getState().sortingVisualizer.speed));
  running = true;
  setIsDisabled(false);
};

export default Quick_sort;
