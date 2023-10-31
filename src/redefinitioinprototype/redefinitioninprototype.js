Object.prototype.valueOf = function() {
    return 42; // Перевизначаємо метод valueOf в прототипі
};

Object.prototype.toString = function() {
    return "Custom Object"; // Перевизначаємо метод toString в прототипі
};

const myObject = {};

console.log(myObject); // Виведе "Custom Object"
console.log(myObject + 10); // Виведе 52, оскільки викликається valueOf