const Manager = require ('../lib/manager');

test ('manger criteria test', () => {
    const manager = new Manager ('George', 'george@gmail.com', '1', '2');
    expect(manager.name).toBe('George');
    expect(manager.email).toBe('george@gmail.com');
    expect(manager.id).toBe('1');
    expect(manager.officeNumber).toBe('2');
});