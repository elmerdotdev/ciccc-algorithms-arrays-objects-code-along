

// function add(a, b) {
//   if (a < 10) {
//     return `a needs to be greater or equal to 10`;
//   }
//   return a + b
// }

const add = function (a, b) {
  if (a < 10) {
    return `a needs to be greater or equal to 10`;
  }
  return a + b
}

const sum = add(12, 10)
console.log(sum)