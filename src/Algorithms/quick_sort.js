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

const partition = async (arr, low, high, speed) => {
  console.log(low, high);
  return await new Promise(async (resolve, reject) => {
    let pivot = arr[high].value;
    elementSelect(arr[high].id)?.classList.add("red");
    let i = low - 1,
      j = low;
    const innerInterval = setInterval(() => {
      if (j >= high) {
        if (j === high) {
          let first = elementSelect(arr[i + 1].id);
          let second = elementSelect(arr[high].id);
          [first.style.transform, second.style.transform] = [
            second.style.transform,
            first.style.transform,
          ];
          [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        } else {
          resolve(i + 1);
          clearInterval(innerInterval);
        }
      } else if (arr[j]?.value <= pivot) {
        i++;
        let first = elementSelect(arr[i].id);
        let second = elementSelect(arr[j].id);
        [first.style.transform, second.style.transform] = [
          second.style.transform,
          first.style.transform,
        ];
        second.classList.add("green");
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      if (j < high) {
        elementSelect(arr[j]?.id)?.classList.add("purple");
      }
      j++;
    }, speed);
  });
};
const qSort = async (arr, low, high, speed) => {
  if (low < high) {
    let pi = await partition(arr, low, high, speed);
    elementSelect(arr[pi].id).classList.add("yellow");
    removeClasses(["green", "red", "purple", "blue"]);
    addClass(low, pi - 1, arr, "blue");
    await qSort(arr, low, pi - 1, speed);
    removeClasses(["green", "red", "purple", "blue"]);
    addClass(pi + 1, high, arr, "blue");
    await qSort(arr, pi + 1, high, speed);
  } else {
    elementSelect(arr[low]?.id)?.classList.add("yellow");
    elementSelect(arr[high]?.id)?.classList.add("yellow");
  }
};

const Quick_sort = async (arr, speed, setIsDisabled) => {
  console.log(arr);
  addClass(0, arr.length - 1, arr, "blue");
  await qSort(arr, 0, arr.length - 1, speed);
  for (let i = 1; i <= arr.length; i++) {
    elementSelect(i).classList.add("yellow");
  }
  setIsDisabled(false);
  console.log(arr);
};

export default Quick_sort;
