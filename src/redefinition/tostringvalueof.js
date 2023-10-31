const myObject = {
    valueOf: function() {
        return 42; // Визначаємо власний метод valueOf
    },
    toString: function() {
        return "Custom Object"; // Визначаємо власний метод toString
    }
};

console.log(myObject); // Виведе "Custom Object"
console.log(myObject + 10);

