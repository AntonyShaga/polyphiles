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

//Filter
let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function isPrime(num) {
  if (num <= 1) return false;
  else if (num === 2) return true;
  else {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return true;
  }
}

Array.prototype.filter2 = function (callback, thisArg) {
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

  let res = [];

  for (let i = 0; i < len; i++) {
    if (i in O) {
      let current = this[i];
      if (callback.call(context, current, i, O)) {
        res.push(current);
      }
    }
  }

  return res;
};

let prime = array.filter2(isPrime);

console.log(prime);


//Map
//
// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
// }[, thisArg]);

let array2 = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

Array.prototype.map2 = function (callback, thisArg) {
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

  let newArray = [];

  let i = 0;

  while (i < len) {
    if (i in O) {
      newArray[i] = callback.call(context, this[i], i, O);
    }

    i++;
  }

  return newArray;
};

let increase1 = (num) => num + 1;
let mul2 = (num) => num * 2;

console.log(array2.filter2(isPrime));
console.log(array2.filter2(isPrime).map2(mul2).map2(increase1));
