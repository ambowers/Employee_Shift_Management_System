// Task 1 create an employees array of employee objects

const employees = [
    {name:'Lina', shifts:[{day: 'Monday',hours: 1},{day: 'Tuesday',hours: 3},{day: 'Wednesday',hours: 1}] },
    {name:'Emily', shifts:[{day: 'Monday',hours: 4},{day: 'Wednesday',hours: 2},{day: 'Friday',hours: 1}]},
    {name:'Emma', shifts:[{day: 'Tuesday',hours: 4},{day: 'Wednesday',hours: 1},{day: 'Thursday',hours: 3}]},
    {name:'Cheyenne', shifts:[{day: 'Monday',hours: 5},{day: 'Tuesday',hours: 4}]}
];

// Task 2 create a function to display employee shift details

function displayEmployeeShifts (employee) {
    console.log(`Employee: ${employee.name}`)
    console.log('Shifts:');
    employee.shifts.forEach(shift => {
    console.log(`Day: ${shift.day}, Hours Worked During Shift: ${shift.hours}`);        
    });
}
employees.forEach(displayEmployeeShifts);

//Task 3 create a function to assign a new shift
function assignShift (employeeName, day, hours) {
    const employee = employees.find(employee => employee.name === employeeName);
    if (employee === undefined){ // this if statement checks if the employee exists
        console.log (`Employee ${employeeName} cannot be found`)
    }
    const alreadyWorking = employee.shifts.find(shift => shift.day === day);
        if (alreadyWorking){
        console.log(`Employee ${employeeName} is already scheduled to work`);
        return;
      }
employee.shifts.push ({day, hours});
    console.log (`Shift successfully added for ${employeeName} to work ${hours} on ${day}.`);
}
//testing the function
 assignShift('Lina', 'Thursday', 3);
 assignShift('Emily','Monday', 3)

// Task 4 create a function to calculate total hours worked
function calculateTotalHours (){
    employees.forEach(employee => {
        const totalHours = employee.shifts.reduce ((total, shift) => {
            return total + shift.hours;
        },0)
        console.log(`${employee.name} has worked ${totalHours} hours this week.`)
    });
}
calculateTotalHours ();

// Task 5 create a function to list employees with free days

function listAvailableEmployees (day) {
    console.log (`Employees not assigned shift on ${day}:`)
    employees.forEach( employee => {
        let hasShift = false
        employee.shifts.forEach(shift => {
            if (shift.day === day)  {
                hasShift = true;}
        })
    if (hasShift === false) {
        console.log(employee.name);
    }});
}
//testing function
listAvailableEmployees('Friday')
