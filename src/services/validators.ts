const functions = {
  doIsNumber(value: string) {
    return !isNaN(Number(value))
  },
  doIsLengthy(value: string) {
    return value.length > 0
  }
}

class Validator {
  private operations: (keyof typeof functions)[] = []

  get isNumber() {
    this.operations.push("doIsNumber")
    return this
  }

  get isLengthy() {
    this.operations.push("doIsLengthy")
    return this
  }

  validate = (value: string) => {
    return this.operations.every(op => functions[op](value))
  }
}

export { Validator }