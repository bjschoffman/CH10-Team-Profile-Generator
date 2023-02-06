const Employee = require ('../lib/Employee');

test ('Employee criteria test', () => {
    const employee = new Employee ('George', 'george@gmail.com', '1');
    expect(employee.name).toBe('George');
    expect(employee.email).toBe('george@gmail.com');
    expect(employee.id).toBe('1');
});