export function isValidSessionName(name) {
    // Ensure name is a string and doesn't consist of all numbers
    return typeof name === 'string' && !/^\d+$/.test(name);
}