const myObject = {
    value: 10,
    valueOf: function() {
        return this.value; // Визначення методу valueOf
    },
    toString: function() {
        return `Value is: ${this.value}`; // Визначення методу toString
    }
};

console.log(myObject + 5); // Виведе 15, оскільки викликається valueOf
console.log(String(myObject)); // Виведе "Value is: 10", оскільки викликається toString