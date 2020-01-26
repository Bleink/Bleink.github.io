//1....banned words
console.log(" 1...................")
String.prototype.filter = function (banned) {
    let splitted = this.split(" ");
    return splitted.filter(s => s !== banned
    ).join(" ");
}
console.log("This house is not nice!".filter("not"));

//2.....buuble sort algorithm
console.log(" \n 2...................")
Array.prototype.bubbleSort = function () {
    let length = this.length;
    for (let i = (length - 1); i >= 0; i--) {
        for (let j = (length - i); j > 0; j--) {
            if (this[j] < this[j - 1]) {
                let tmp = this[j];
                this[j] = this[j - 1];
                this[j - 1] = tmp;
            }
        }
    }
    return this;
}
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

//3...function Constructor
console.log(" \n 3...................")
console.log("\n .....................using function Constructor.....................................")

function Person(name) {
    this.name = name;
};
const teacher = new Person("Dr. Keith Levi");
Person.prototype.teach = function (subject) {
    return this.name + " is now teaching" + subject;
}
console.log(teacher.teach(" WAP"));
// Object.Create