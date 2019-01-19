module objects {
    export interface Greeter{
        saysHello(): void;
    }
    export abstract class Person implements Greeter {
        //PRIVATE PROPERTIES
        private _age: number;
        private _name: string;

        // PUBLIC PROPERTIES
        get age(): number {
            return this._age;
        }

        set age(newAge: number) {
            this._age = newAge;
        }

        get name(): string {
            return this._name;
        }

        set name(newNanme: string) {
            this._name = newNanme;
        }
        constructor(age: number, name: string) {
            this.age = age;
            this.name = name;
        }

        public saysHello(): void {
            console.log(`${this.name} says Hello!`);
        }
    }
    export class Student extends objects.Person {
        //Private Variables
        private _studentID: string;
        //Public Properties
        get studentID(): string {
            return this._studentID;
        }

        constructor(age: number, name: string, studentID: string) {
            super(age, name);

            this._studentID = studentID;
        }

        //Private methods


        //Public methods
        public studies(): void {
            console.log(`${this.name} says Hello!}
}}