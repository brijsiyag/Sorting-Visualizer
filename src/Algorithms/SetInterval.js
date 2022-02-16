import store from "../app/store";

const SetInterval = async (fn) => {
  var shouldReturn = false;
  const clearMyInterval = () => {
    shouldReturn = true;
    return;
  };
  await fn(clearMyInterval);
  !shouldReturn &&
    setTimeout(() => {
      SetInterval(fn);
    }, store.getState().sortingVisualizer.speed);
};

export default SetInterval;
