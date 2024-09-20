const student = {
  firstName: "John",
  lastName: "Smith",
  age: 30,
  isWorking: false,
  hobbies: ["swimming", "skydiving", "rock-climbing"],
  addHobby: function(hobby) {
    this.hobbies.push(hobby)
  },
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  },
  getBirthYear: function() {
    return 2024 - this.age
  },
  greeting: function() {
    return `Hi, my name is ${this.getFullName()}. I am ${this.age} years old. I was born in ${this.getBirthYear()}.`
  },
}

console.log(student.greeting())
student.firstName = "Jane"
student.age = 40
console.log(student.greeting())



const employee = {
  firstName: "Peter",
  lastName: "Griffin",
  position: "Manager",
  salary: 80000,
  department: "Engineering",
  introduction: function() {
    return `My name is ${this.firstName} ${this.lastName}. I work as a ${this.position} and earn ${this.salary} per year under the ${this.department} department.`
  }
}

console.log(employee)
employee.workHours = 40 // this will create a new property called workHours
console.log(employee)



const students = [
  { firstName: "John", lastName: "Smith", age: 20 }, // 0
  { firstName: "Joe", lastName: "Smith", age: 21 }, // 1
  { firstName: "Jane", lastName: "Smith", age: 19 }, // 2
  { firstName: "Mary", lastName: "Smith", age: 22 } // 3
]

for (let i = 0; i < students.length; i++) {
  const fullname = `${students[i].firstName} ${students[i].lastName}`
  console.log(fullname)
}
