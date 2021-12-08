async function merge(arr, l, m, r, speed) {
  var n1 = m - l + 1;
  var n2 = r - m;
  var L = new Array(n1);
  var R = new Array(n2);
  var strr = [];
  for (let i = 0; i < n1; i++) L[i] = arr[l + i];
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
  console.log("L", L);
  console.log("R", R);
  var i = 0,
    j = 0,
    k = l;
  while (i < n1 && j < n2) {
    if (L[i].value <= R[j].value) {
      strr.push(L[i]);
      i++;
    } else {
      strr.push(R[j]);
      j++;
    }
  }
  while (i < n1) {
    strr.push(L[i]);
    i++;
  }
  while (j < n2) {
    strr.push(R[j]);
    j++;
  }
  console.log("strr", strr);
  k = l;
  var posArr = [];
  for (let i = l; i <= r; i++) {
    let first = document.querySelector(`#id${arr[i].id}`);
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(first.style.transform);
    posArr.push(matches[0].slice(1, matches[0].length - 1).split(",")[0]);
  }
  await new Promise((resolve) => {
    console.log(strr);
    const innerInterval = setInterval(() => {
      if (k <= r) {
        let first = document.querySelector(`#id${arr[k].id}`);
        let second = document.querySelector(`#id${strr[k].id}`);
        // console.log(`Swap(${arr[k].id} -  ${strr[k].id})`);
        // [first.style.transform, second.style.transform] = [
        //   second.style.transform,
        //   first.style.transform,
        // ];
        // var regExp = /\(([^)]+)\)/;
        // var matches = regExp.exec(first.style.transform);
        // console.log(matches[0].slice(1, matches[0].length - 1).split(",")[0]);
        second.style.transform = `translate(${posArr[k]},-200px)`;
        // second.style.transform = "translateY(-200px)";
        [arr[k], strr[k]] = [strr[k], arr[k]];
        k++;
      } else {
        clearInterval(innerInterval);
        for (let i = l; i <= r; i++) {
          let first = document.querySelector(`#id${arr[i].id}`);
          var regExp = /\(([^)]+)\)/;
          var matches = regExp.exec(first.style.transform);
          first.style.transform = `translate(${
            matches[0].slice(1, matches[0].length - 1).split(",")[0]
          },0px)`;
        }
        resolve(true);
      }
    }, 500);
    console.log("Innner done...");
  });
}

const merge_sort = async (getArr, speed, setIsDisabled) => {
  var getArrVals = await getArr();
  var arr = [...getArrVals];
  console.log(arr, "Extracted..");
  await merge(arr, 0, 2, 5, speed);
  // var recArr = [];
  // const mergeSort = async (arr, l, r, speed) => {
  //   if (l >= r) {
  //     console.log("Returned....");
  //     return;
  //   }
  //   var m = l + parseInt((r - l) / 2);
  //   await mergeSort(arr, l, m, speed);
  //   await mergeSort(arr, m + 1, r, speed);
  //   recArr.push([l, m, r]);
  // };
  // await mergeSort(arr, 0, arr.length - 1, speed);
  // for (let i = 0; i < recArr.length; i++) {
  //   const element = recArr[i];
  // await merge(arr, 0, 4, 10, speed);
  // }
  setIsDisabled(false);
  ////////////////////////////////////////////////////////////////////////////////////////////////
  //   let curRec = 0;
  //   const intervalProp = setIntervalAsync(async () => {
  //     await new Promise(async (resolve) => {
  //       console.log(curRec, recursionOrder.length);
  //       if (curRec === recursionOrder.length) {
  //         clearInterval(intervalProp);
  //         setIsDisabled(false);
  //       } else {
  //         console.log("Fifth Step");
  //         await merge(
  //           recursionOrder[curRec][0],
  //           recursionOrder[curRec][1],
  //           recursionOrder[curRec][2]
  //         );
  //         console.log("Bottom of the await");
  //         resolve(curRec++);
  //       }
  //     });
  //   }, 100);
};

export default merge_sort;
