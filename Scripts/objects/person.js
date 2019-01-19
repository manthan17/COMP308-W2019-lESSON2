var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Person = /** @class */ (function () {
        function Person(age, name) {
            this.age = age;
            this.name = name;
        }
        Object.defineProperty(Person.prototype, "age", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._age;
            },
            set: function (newAge) {
                this._age = newAge;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (newNanme) {
                this._name = newNanme;
            },
            enumerable: true,
            configurable: true
        });
        Person.prototype.saysHello = function () {
            console.log(this.name + " says Hello!");
        };
        return Person;
    }());
    objects.Person = Person;
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(age, name, studentID) {
            var _this = _super.call(this, age, name) || this;
            _this._studentID = studentID;
            return _this;
        }
        Object.defineProperty(Student.prototype, "studentID", {
            //Public Properties
            get: function () {
                return this._studentID;
            },
            enumerable: true,
            configurable: true
        });
        //Private methods
        //Public methods
        Student.prototype.studies = function () {
            console.log(this.name + " says Hello!}\n}}");
        };
        return Student;
    }(objects.Person));
    objects.Student = Student;
})(objects || (objects = {}));
//# sourceMappingURL=person.js.map