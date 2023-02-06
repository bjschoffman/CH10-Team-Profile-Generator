const Intern = require ('../lib/intern');

test ('Intern criteria test', () => {
    const intern = new Intern ('George', 'george@gmail.com', '1', 'University');
    expect(intern.name).toBe('George');
    expect(intern.email).toBe('george@gmail.com');
    expect(intern.id).toBe('1');
    expect(intern.school).toBe('University');
});