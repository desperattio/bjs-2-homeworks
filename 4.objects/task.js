function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  return (this.marks && this.marks.length !== 0) ? (this.marks.reduce((prevValue, currValue) => prevValue + currValue, 0) / this.marks.length) : 0;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}

let student1 = new Student("Louis", "male", 24);
let student2 = new Student("Taylor", "female", 20);
let student3 = new Student("Niall", "male", 18);
