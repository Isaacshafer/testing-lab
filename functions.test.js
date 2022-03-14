const { returnTwo, greeting, add } = require('./functions')


test('should return the number 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('should return greeting with the supplied name', () => {
    expect(greeting('isaac')).toEqual('hello isaac')
})

test('should add two supplied numbers added together', () => {
    expect(add(5, 9)).toEqual(14)
})