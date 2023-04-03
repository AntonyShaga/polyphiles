// // ForEach
//arr.forEach(callback(currentValue[, index[, array]]) {
//   // execute something
// }[, thisArg]);

let arr = [1, 2, 3];
arr[10] = 10;

Array.prototype.forEach2 = function (callback, thisArg) {
  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }
  let context = this;

  let O = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }

  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let len = O.length;

  let i = 0;

  while (i < len) {
    if (i in O) {
      callback.call(context, this[i], i, O);
    }

    i++;
  }
};

arr.forEach2.call(1, (item, index, array) => {
  console.log({ item, index });
});