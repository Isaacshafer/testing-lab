module.exports = {
    returnTwo: () => {
        return 2
    },
    greeting: (name) => {
        let hello = `hello ${name}`
        return hello
    },
    add: (num1, num2) => {
        let sum = num1 + num2
        return sum
    }
}