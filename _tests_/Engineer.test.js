const Engineer = require ('../lib/Engineer');

test ('Engineer criteria test', () => {
    const engineer = new Engineer ('1234', 'George', 'george@gmail.com', 'george');
    expect(engineer.id).toBe('1234');
    expect(engineer.name).toBe('George');
    expect(engineer.email).toBe('george@gmail.com');
    expect(engineer.github).toBe('george');
});