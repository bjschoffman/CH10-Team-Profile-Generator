const Manager = require ('../lib/manager');

test ('manger criteria test', () => {
    const manager = new Manager ('1234', 'George', 'george@gmail.com', '123');
    expect(manager.id).toBe('1234');
    expect(manager.name).toBe('George');
    expect(manager.email).toBe('george@gmail.com');
    expect(manager.officeNumber).toBe('123');
});