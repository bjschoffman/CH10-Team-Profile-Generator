const Employee = require ('../lib/Employee');

test ('Employee criteria test', () => {
    const employee = new Employee ('1234', 'George', 'george@gmail.com');
    expect(employee.id).toBe('1234');
    expect(employee.name).toBe('George');
    expect(employee.email).toBe('george@gmail.com');
});