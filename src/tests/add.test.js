const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

// first argument is the message and the second argument is an arrow function
test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should generate greeting from name', () => {
    const result = generateGreeting('Daniel');
    expect(result).toBe('Hello Daniel');
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
});