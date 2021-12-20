const map = (coll, iteratee, callback) => {
  // Implement this function.
  // coll, the first argument, is an array of data
  // iteratee, the second argument, is an async worker function
  // Your `map` function has to run every element in the `coll` through `iteratee`
  // When all elements all called, the result should be an array sent to `callback`
  
  // Bonus points if you do NOT use promises.
  
  // Basically we want you to implement this function: https://caolan.github.io/async/v3/docs.html#map
}

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const a2 = [1, 2, 3, 0, 4, 5];

const worker = (n, cb) => {
  setTimeout(() => {
    if (n === 0) return cb("6 Error");

    return cb(null, n*2);
  }, 1000 - (n * 100));
};

const callback = (err, results) => {
  console.log(err, results);
};

map(a1, worker, callback);
map(a2, worker, callback);
