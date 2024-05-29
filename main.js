//Part 3: Array with Types and Indexing - Employee Salaries
//2. Define an array named employees containing employee objects. Each employee object should include a name, hoursWorked, hourlyRate, and salary.
var employees = [
    {
        name: "Ahmed",
        hoursWorked: 30,
        hourlyRate: 20,
        salary: 50000,
    },
    {
        name: "Aish",
        hoursWorked: 50,
        hourlyRate: 25,
        salary: 80000
    },
    {
        name: "Abdullah",
        hoursWorked: 20,
        hourlyRate: 30,
        salary: 70000
    }
];
console.log(employees);
//3. Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate.
function calculateSalary(employee) {
    return employee.hoursWorked * employee.hourlyRate;
}
var employee2 = {
    name: "Aish",
    hoursWorked: 50,
    hourlyRate: 25,
    salary: 0 //  calculated
};
employee2.salary = calculateSalary(employee2);
console.log(employee2.salary);
//4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.
function calculateTheSalary(hoursWorked, salary) {
    if (hoursWorked >= 20) {
        return salary * 1.10; // apply 10% bonus
    }
    else {
        return salary;
    }
}
;
var employee3 = {
    name: "Abdullah",
    hoursWorked: 20,
    hourlyRate: 30,
    salary: 0
};
employee3.salary = calculateSalary(employee3);
console.log(employee3.salary);
