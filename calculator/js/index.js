const numberButtons = document.querySelectorAll('[number]')
const operationButtons = document.querySelectorAll('[operation]')
const equalsButton = document.querySelector("equals")
const deleteButton = document.querySelector('[delete]')
const allClearButton = document.querySelector("allClear")
const previousOperationTextElement = document.querySelector(".previous-operation")
const currentOperationTextElement = document.querySelector(".current-operation")

class Calculator {
   constructor(previousOperationTextElement, currentOperationTextElement) {
    this.currentOperationTextElement = currentOperationTextElement
    this.previousOperationTextElement = previousOperationTextElement
    this.clear() 
  }
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  numberButtons.forEach(button =>  {
    button.addEventListener("click", () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })

