// Task 1 create an employees array of employee objects
const employees = [
    {name:'Lina', shifts:[{day: 'Monday',hours: 1},{day: 'Tuesday',hours: 3},{day: 'Wednesday',hours: 1}] },
    {name:'Emily', shifts:[{day: 'Monday',hours: 4},{day: 'Wednesday',hours: 2},{day: 'Friday',hours: 1}]},
    {name:'Emma', shifts:[,{day: 'Tuesday',hours: 4},{day: 'Wednesday',hours: 1},{day: 'Thursday',hours: 3}]},
    {name:'Cheyenne', shifts:[{day: 'Monday',hours: 5},{day: 'Tuesday',hours: 4}]}
];

// Task 2 create a function to display employee shift details
function displayEmployeeShifts (employee) {
    console.log(`Employee: ${employee.name}`)
    console.log('Shifts:');
    employee.shifts.forEach(shift => {
    console.log(`Day: ${shift.day}, Hours Worked During Shift: ${shift.hours}`)        
    });
}
employees.forEach(displayEmployeeShifts);
