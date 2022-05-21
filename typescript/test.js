//Create objects from rectangle and square and test them, and make sure the square inherited rectangle members.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _this = this;
var Rectangle = /** @class */ (function () {
    function Rectangle(_w, _h) {
        this.width = _w;
        this.height = _h;
    }
    Rectangle.prototype.CalcCircumference = function (_w, _h) {
        var c = 2 * (_w + _h);
        return c;
    };
    Rectangle.WhoAmI = function () {
        console.log("iam rectangle");
    };
    return Rectangle;
}());
var rec = new Rectangle(2, 4);
console.log(rec.CalcCircumference(2, 4));
Rectangle.WhoAmI();
var square = /** @class */ (function (_super) {
    __extends(square, _super);
    function square(_l) {
        var _this = _super.call(this, 3, 3) || this;
        _this.length = _l;
        return _this;
    }
    square.prototype.CalcCircumference = function (_l) {
        var pi = 3.14;
        var c = pi * _l;
        return c;
    };
    square.WhoAmI = function () {
        console.log("I am square");
    };
    return square;
}(Rectangle));
var sq = new square(5);
console.log(sq.CalcCircumference(5));
square.WhoAmI();
sq.height = 1; //the Rectangle fiels are accessible in square.
//Types annotation 
var uname = "ola";
console.log(uname);
//union types
var change = true; // you may add a number instead
console.log(change);
var ball = {
    size: 17,
    color: "blue",
    print: function () { return "the size is ".concat(_this.size, " $ the color is ").concat(_this.color); }
};
console.log(ball.print());
//enum
var types;
(function (types) {
    types[types["circle"] = 1] = "circle";
    types[types["rectangle"] = 2] = "rectangle";
    types[types["square"] = 3] = "square";
})(types || (types = {}));
var t = types.square;
console.log(t);
//function
function display(name) {
    var greeting = "hello ".concat(name);
    return greeting;
}
console.log(display("lamia"));
//generics
function type(val) {
    return val;
}
var value = type("iam string");
console.log(value);
var value2 = type(3);
console.log(value2);
//class, inheritance and function overriding
var person = /** @class */ (function () {
    function person(_name, _age) {
        this.fullName = _name;
        this.age = _age;
    }
    person.prototype.tostring = function () {
        console.log(this.fullName, this.age);
    };
    return person;
}());
var p1 = new person("ahmed", 20);
// console.log(p1);
p1.tostring();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(_name, _age, _job) {
        var _this = _super.call(this, _name, _age) || this;
        _this.job = _job;
        return _this;
    }
    Employee.prototype.tostring = function () {
        console.log(this.fullName, this.age, this.job);
    };
    return Employee;
}(person));
var emp = new Employee("ali", 30, "dev");
emp.tostring();
// module
//  import { bankAccount } from "./bank.Account";
//  let A : bankAccount = new bankAccount("mohamed" , 2000);
//   console.log(A.display());
//   console.log(A.getAccountNum());
//Namespace
//Implement Queue or Stack using typescript and OOP.
//  import { Stack } from "./stack.class";
//  let stack = new Stack();
//    stack.push(1);
//    stack.push(2);
//    stack.push(3);
//    console.log(stack);
//    console.log(stack.pop());
//Implement linked list using typescript and OOP [create class node, and class linkedList].
//Singleton design pattern 
var instance = null;
var printer = /** @class */ (function () {
    function printer(_pages) {
        this.pages = _pages;
    }
    printer.prototype.display = function () {
        console.log("you are connected to the printer, you want to print ".concat(this.pages));
    };
    printer.getInstance = function (numOfPages) {
        if (!instance) {
            instance = new printer(numOfPages);
        }
        return instance;
    };
    return printer;
}());
var obj = printer.getInstance(4);
obj.display();
var obj2 = printer.getInstance(3);
obj.display();
