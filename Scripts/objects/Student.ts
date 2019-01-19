module objects{

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
        console.log(`${this.name} says Hello!`);
    }
}
}