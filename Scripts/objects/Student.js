"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
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
        console.log(this.name + " says Hello!");
    };
    return Student;
}(objects.Person));
exports.Student = Student;
//# sourceMappingURL=Student.js.map