const student = {
    fname : "gagan deep",
    marks : 94.4,
    printMarks: function() {
        console.log("Marks = ",this.marks);
    }
};
console.log(student.printMarks());

// JS objects have a special property called prototype , through which arrays and object inherit few methods and properties 
// we can set prototype using the key word __proto__ , it is a reference to an object (pointer)

const employee = {
    calcTax1() {
        console.log("10% tax");
    },
};
const employee_A = {
    salary : 50000,
};
const employee_B = {
    salary : 20000,
};

employee_A.__proto__ = employee;
employee_B.__proto__ = employee;

//    Class is a program-code template for creating object , objects can be created in bulk using classes 

class Car {
    start () {
        console.log("start");
    }

    stop () {
        console.log("stop");
    }
}
