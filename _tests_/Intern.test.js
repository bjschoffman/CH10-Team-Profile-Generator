const Intern = require ('../lib/intern');

test ('Intern criteria test', () => {
    const intern = new Intern ('1234', 'George', 'george@gmail.com', 'U of M');
    expect(intern.id).toBe('1234');
    expect(intern.name).toBe('George');
    expect(intern.email).toBe('george@gmail.com');
    expect(intern.school).toBe('U of M');
});