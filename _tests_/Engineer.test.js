const Engineer = require ('../lib/Engineer');

test ('Engineer criteria test', () => {
    const engineer = new Engineer ('George', 'george@gmail.com', '1', 'george');
    expect(engineer.name).toBe('George');
    expect(engineer.email).toBe('george@gmail.com');
    expect(engineer.id).toBe('1');
    expect(engineer.github).toBe('george');
});