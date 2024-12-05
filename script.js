const buttContainer = document.querySelector('.number-buttons')
const resultScreen = document.querySelector('.show-result')
const calcKeyboardInput = document.querySelector('.user-interface button')
const keyboardInput = document.querySelector('.user-interface input')
let numContainer = ''
let sign = ''
let firstUse = true
let arrToCalc = []
let sum = 0
let currShowing = ''


const numButtGen = () => {
    let numButtArr = []
    for (let i = 0; i <= 9; i++){
        let btnId = {
            id : i
        }
        numButtArr.push(btnId)
}
    numButtArr.forEach((btn) => {
        const numButt = document.createElement('button')
        numButt.classList.add('num-butt')
        numButt.innerHTML = `${btn.id}`
        numButt.addEventListener('click', () => {
            numContainer += `${btn.id}`
            console.log(numContainer, 'numContainer')
            currShowing = numContainer
            resultScreen.innerHTML = currShowing
            if (!firstUse && !sign){
                console.log('!first')
                sum = 0
                arrToCalc = []
                firstUse = true
            }
        })
        buttContainer.appendChild(numButt)
})
}

const plusBtn = document.createElement('button')
plusBtn.innerHTML = '+'
plusBtn.classList.add('express-butt')
plusBtn.addEventListener('click', () => {
  sign = '+'
  if (!currShowing.includes(sign)){
    add(numContainer)
    console.log('nope')
    currShowing += sign
    console.log(currShowing)
    resultScreen.innerHTML = currShowing
    
  }
  numContainer = ''
})
buttContainer.appendChild(plusBtn)

const subBtn = document.createElement('button')
subBtn.innerHTML = '-'
subBtn.classList.add('express-butt')
subBtn.addEventListener('click', () => {
  sign = '-'
  if (!currShowing.includes(sign)){
    subtract(numContainer)
    currShowing += sign
    resultScreen.innerHTML = currShowing
  }
  numContainer = ''
})
buttContainer.appendChild(subBtn)

const mulBtn = document.createElement('button')
mulBtn.innerHTML = '*'
mulBtn.classList.add('express-butt')
mulBtn.addEventListener('click', () => {
  sign = '*'
  if(!currShowing.includes(sign)){
    multiply(numContainer)
    currShowing += sign
    resultScreen.innerHTML = currShowing
  }
  numContainer = ''
})
buttContainer.appendChild(mulBtn)

const divideBtn = document.createElement('button')
divideBtn.innerHTML = '/'
divideBtn.classList.add('express-butt')
divideBtn.addEventListener('click', () => {
  sign = '/'
  if(!currShowing.includes(sign)){
    divide(numContainer)
    currShowing += sign
    resultScreen.innerHTML = currShowing
  }
  numContainer = ''
})
buttContainer.appendChild(divideBtn)

const dotBtn = document.createElement('button')
dotBtn.innerHTML = '.'
dotBtn.classList.add('express-butt')
dotBtn.addEventListener('click', () => {
    console.log('dotbtn')
    console.log(currShowing)
  if (Number(currShowing[currShowing.length - 1])){
    console.log('dot')
    numContainer += '.'
    currShowing += '.'
    resultScreen.innerHTML = currShowing
  }
})
buttContainer.appendChild(dotBtn)

const calcBtn = document.createElement('button')
calcBtn.innerHTML = '='
calcBtn.classList.add('express-butt')
buttContainer.appendChild(calcBtn)

const clearBtn = document.createElement('button')
clearBtn.innerHTML = 'C'
clearBtn.classList.add('express-butt')
clearBtn.classList.add('delete-butt')
clearBtn.addEventListener('click', () => {
    if (currShowing[currShowing.length - 1] === sign){
        currShowing = currShowing.slice(0, currShowing.length - 1)
        resultScreen.innerHTML = currShowing
    } else {
        numContainer = numContainer.slice(0, numContainer.length - 1)
        resultScreen.innerHTML = numContainer
    }
})
buttContainer.appendChild(clearBtn)

const resetBtn = document.createElement('button')
resetBtn.innerHTML = 'AC'
resetBtn.classList.add('express-butt')
resetBtn.addEventListener('click', () => {
    numContainer = ''
    currShowing = ''
    resultScreen.innerHTML = ''
    firstUse = true
    sum = 0
    arrToCalc = []
})
buttContainer.appendChild(resetBtn)

// keyboardInput.addEventListener('input', (e) => {
//     calcKeyboardInput.addEventListener('click', () => {
//         let result = calcInput(e.target.value)
//         resultScreen.innerHTML = result
//     })
// })

// const calcInput = (mathString) => {
//     let resultCalc = eval(mathString)
//     return resultCalc
// }

const add = (num) => {
    if (firstUse) {
        console.log('inside add', numContainer)
        arrToCalc.push(num)
        if (arrToCalc.length === 2){
            let firstNum = Number(arrToCalc[0])
            let secnum = Number(arrToCalc[arrToCalc.length -1])
            sum = firstNum + secnum
            console.log('Sum is:', sum)
      }
    } else {
      if (numContainer.length > 0){
        console.log('length is greater than 0')
        arrToCalc = []
        arrToCalc.push(Number(sum))
        arrToCalc.push(Number(num))
        sum = arrToCalc[0] + arrToCalc[arrToCalc.length -1]
        console.log('The sum now is:', sum)
    }
      }
  }
  
const subtract = (num) => {
    if (firstUse) {
        arrToCalc.push(num)
        if (arrToCalc.length === 2){
        let firstNum = Number(arrToCalc[0])
        let secnum = Number(arrToCalc[arrToCalc.length -1])
        sum = firstNum - secnum
        console.log('Sum is:', sum)
      }
    } else {
      if (numContainer.length > 0){
        arrToCalc = []
        arrToCalc.push(Number(sum))
        arrToCalc.push(Number(num))
        sum = arrToCalc[0] - arrToCalc[arrToCalc.length -1]
        console.log('The sum now is:', sum)
    }
      }
  }
  
const multiply = (num) => {
    if (firstUse) {
      arrToCalc.push(num)
      if (arrToCalc.length === 2){
        let firstNum = Number(arrToCalc[0])
        let secnum = Number(arrToCalc[arrToCalc.length -1])
        sum = firstNum * secnum
        console.log('Sum is:', sum)
      }
    } else {
      if (numContainer.length > 0){
        arrToCalc = []
        arrToCalc.push(Number(sum))
        arrToCalc.push(Number(num))
        sum = arrToCalc[0] * arrToCalc[arrToCalc.length -1]
        console.log('The sum now is:', sum)
    }
      }
  }
  
const divide = (num) => {
    if (firstUse) {
      arrToCalc.push(num)
      if (arrToCalc.length === 2){
        let firstNum = Number(arrToCalc[0])
        let secnum = Number(arrToCalc[arrToCalc.length -1])
        sum = firstNum / secnum
        console.log('Sum is:', sum)
      }
    } else {
      if (numContainer.length > 0){
        arrToCalc = []
        arrToCalc.push(Number(sum))
        arrToCalc.push(Number(num))
        sum = arrToCalc[0] / arrToCalc[arrToCalc.length -1]
        console.log('The sum now is:', sum)
    }
      }
  }  
  
calcBtn.addEventListener('click', () => {
    switch(sign) {
        case '+':
        add(numContainer)
        resultScreen.innerHTML = sum
        break
        case '-':
        subtract(numContainer)
        resultScreen.innerHTML = sum
        break
        case '*':
        multiply(numContainer)
        resultScreen.innerHTML = sum
        break
        case '/':
        divide(numContainer)
        resultScreen.innerHTML = sum
        break
    }
    sign = ''
    currShowing = ''
    currShowing += sum
    console.log(firstUse)
    numContainer = ''
    firstUse = false
})

numButtGen()
// expressGen()