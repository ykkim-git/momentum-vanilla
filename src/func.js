const calc = {
	plus: (a, b) => {
		return a + b;
	},
	minus: (a, b) => {
		return a - b;
	},
	multiply: (a, b) => {
		return a * b;
	},
	divide: (a, b) => {
		return a / b;
	},
	power: (a, b) => {
		return a ** b;
	}
}

const plus = calc.plus(5, 5)
const minus = calc.minus(10, 5)
const multiply = calc.multiply(2, 3)
const divide = calc.divide(100, 10)
const power = calc.divide(3, 2)

console.log(`5 + 5 = ${plus}`)
console.log(`10 - 5 = ${minus}`)
console.log(`2 * 3 = ${multiply}`)
console.log(`100 / 10 = ${divide}`)
console.log(`3 ^ 2 = ${power}`)