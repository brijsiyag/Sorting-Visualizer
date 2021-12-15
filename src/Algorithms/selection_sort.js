const removeClass = (className) => {
  document.querySelectorAll(`.${className}`).forEach((element) => {
    element.classList.remove(className);
  });
};

const Insertion_sort = async (arr, speed, setIsDisabled) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    console.log("In Interval");
    let min_idx = i;
    removeClass("red");
    document.getElementById(`id${arr[min_idx].id}`).classList.add("red");
    await new Promise((resolve) => {
      let j = i + 1;
      const innerInterval = setInterval(() => {
        if (j < n) {
          removeClass("green");
          document.getElementById(`id${arr[j].id}`).classList.add("green");
          if (arr[j].value < arr[min_idx].value) {
            min_idx = j;
            removeClass("red");
            document
              .getElementById(`id${arr[min_idx].id}`)
              .classList.add("red");
          }
          j++;
        } else {
          clearInterval(innerInterval);
          removeClass("green");
          let first = document.querySelector(`#id${arr[i].id}`);
          let second = document.querySelector(`#id${arr[min_idx].id}`);
          [first.style.transform, second.style.transform] = [
            second.style.transform,
            first.style.transform,
          ];
          [arr[min_idx], arr[i]] = [arr[i], arr[min_idx]];
          document.querySelector(`#id${arr[i].id}`).classList.remove("red");
          document.querySelector(`#id${arr[i].id}`).classList.add("yellow");
          setTimeout(() => {
            resolve(true);
          }, speed);
        }
      }, speed);
    });
  }
  setIsDisabled(false);
};

export default Insertion_sort;
