const ASYNC = require('async')

/**
 * Asynchronous map
 * @param {Array} collection Array of data
 * @param {Function} iteratee Asynchronous worker function
 * @param {Function} callback Accepts 2 arguments: `error`, `results`
 */
const map =
  (collection, iteratee, callback) => {
    let newCollection = []
    let error = null

    collection.map((x, i) => iteratee(x, (err, result) => {
      newCollection[i] = result

      err ? error = err : undefined

      Object.keys(newCollection).length === collection.length
        ? callback(error, newCollection)
        : undefined
    }))
  }

// Your `map` function has to run every element in the `coll` through `iteratee`
// When all elements are called, the result should be an array sent to `callback`

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const a2 = [1, 2, 3, 0, 4, 5]

const worker =
  (n, cb) =>
    setTimeout(
      () => n === 0 ? cb("6 Error") : cb(null, n * 2),
      1000 - (n * 100)
    )

const callback =
  (err, results) =>
    console.log(err, results)

map(a1, worker, callback)
map(a2, worker, callback)

// ASYNC.map(a1, worker, callback)
// ASYNC.map(a2, worker, callback)
