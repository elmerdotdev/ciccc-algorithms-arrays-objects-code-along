// const animals = ["cat", "dog", "parrot", "owl", "shark", "bear"]
// console.log(animals)
//                    //0      //1    //2    //3     //4
// const students = ["Chris", "Daz", "Jose", "Aya", "Chloe"]
// const specificStudent = students[1] // Daz
// console.log(specificStudent[2]) // z

// const numbers = [32, 54, 8, 10, 2]
// console.log(numbers[2])

// const teams = [
//   ["Daz", "Julio"], // 0
//   ["Kendrick", "Tomoya"],  // 1
//   ["Aya", "Chris"]   // 2
// ]

// const selectedTeam = teams[2] // team index 2
// const selectPerson = selectedTeam[0] // Aya
// console.log(selectPerson)



// function isPalindrome(word) {
//   let lowercase = word.toLowerCase() // racecar
//   let letters = lowercase.split('') // ['r','a','c','e','c','a','r']
//   let reverseLetters = letters.reverse() // ['r','a','c','e','c','a','r']
//   let combinedWord = reverseLetters.join('') // racecar
//   if (lowercase === combinedWord) {
//     console.log(`${word} is a palindrome!!!`)
//   } else {
//     console.log(`${word} is not a palindrome :(((`)
//   }
// }

// isPalindrome("Dad")

                    //0    //1     //2     //3
const employees = ["John", "Joe", "Jane", "Jack"]
console.log(employees.length)
console.log(employees)
employees.unshift('Analyn') // adds Analyn to the beginning of the array
employees.pop() // removes the last element in the array
employees.push('Adam') // adds to the end of the array
console.log(employees)

console.log(employees.length) // 5
console.log(employees[employees.length - 1])


const teams = [
  ["Daz", "Julio", "Jose"], // 0
  ["Kendrick", "Tomoya"],  // 1
  ["Aya", "Chris", "Kenny"]   // 2
]

for (let index = 0; index < teams.length; index++) {
  console.log(`${teams[index][0]}'s team has ${teams[index].length} people`)
}
              //0     //1     //2     //3
const pets = ["fish", "dog", "bird", "cat"]
pets.splice(2, 0, "ferret", "tiger") // (index, numberOfElementsToRemove, elementToAdd)
console.log(pets)



const fruits = ["apple", "banana", "orange", "melon"]
fruits.splice(2, 3)
console.log(fruits)

