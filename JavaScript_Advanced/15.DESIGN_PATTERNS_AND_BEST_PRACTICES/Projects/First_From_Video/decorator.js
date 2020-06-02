class Employee {
    constructor(name, yearOfWork, title, seniority){
        this.name = name;
        this.yearOfWork = yearOfWork;
        this.title = title;
        this.seniority = seniority;
    }
}

const decorateEmployee = (employee) => {
    if(employee.yearOfWork > 2){
        return new Employee(employee.name, employee.yearOfWork, employee.title, "regular");
    }
    return employee;
};

const decorate2 = (employee) => employee;

let employee = new Employee("Pesho", 1, "Technical guy", "junior");

console.log(employee);
employee.yearOfWork += 3;
employee = decorate2(decorateEmployee(employee));
console.log(employee);