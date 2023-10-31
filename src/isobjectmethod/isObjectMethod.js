function isObject(data) {
    return typeof data === 'object' && data !== null;
}

// Приклади використання
console.log(isObject({})); // true
console.log(isObject([])); // true
console.log(isObject(null)); // false
console.log(isObject("строка")); // false
console.log(isObject(42)); // false