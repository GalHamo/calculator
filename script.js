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
          if (!firstUse && !sign){
            console.log('!first')
            numContainer = ''
            sum = 0
            arrToCalc = []
            firstUse = true
        }
            numContainer += `${btn.id}`
            console.log(numContainer, 'numContainer')
            resultScreen.innerHTML = numContainer
            
        })
        buttContainer.appendChild(numButt)
})
}

const plusBtn = document.createElement('button')
plusBtn.innerHTML = '+'
plusBtn.classList.add('express-butt')
plusBtn.addEventListener('click', () => {
  if (Number(numContainer)){
    sign = '+'
  }
  if (!numContainer.includes(sign)){
    console.log('nope')
    numContainer += sign
    resultScreen.innerHTML = numContainer
  }
})
buttContainer.appendChild(plusBtn)

const subBtn = document.createElement('button')
subBtn.innerHTML = '-'
subBtn.classList.add('express-butt')
subBtn.addEventListener('click', () => {
  if (Number(numContainer)){
    sign = '-'
  }
  if (!numContainer.includes(sign)){
    numContainer += sign
    resultScreen.innerHTML = numContainer
  }

})
buttContainer.appendChild(subBtn)

const mulBtn = document.createElement('button')
mulBtn.innerHTML = '*'
mulBtn.classList.add('express-butt')
mulBtn.addEventListener('click', () => {
  if (Number(numContainer)){
    sign = '*'
  }
  if(!numContainer.includes(sign)){
    numContainer += sign
    resultScreen.innerHTML = numContainer
  }

})
buttContainer.appendChild(mulBtn)

const divideBtn = document.createElement('button')
divideBtn.innerHTML = '/'
divideBtn.classList.add('express-butt')
divideBtn.addEventListener('click', () => {
  if (Number(numContainer)){
    sign = '/'
  }
  if(!numContainer.includes(sign)){
    numContainer += sign
    resultScreen.innerHTML = numContainer
  }

})
buttContainer.appendChild(divideBtn)

const dotBtn = document.createElement('button')
dotBtn.innerHTML = '.'
dotBtn.classList.add('express-butt')
dotBtn.addEventListener('click', () => {
    console.log('dotbtn')
    console.log(numContainer)
  if (Number(numContainer[numContainer.length - 1])){
    console.log('dot')
    numContainer += '.'
    resultScreen.innerHTML = numContainer
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
    resultScreen.innerHTML = ''
    firstUse = true
    sum = 0
    arrToCalc = []
})
buttContainer.appendChild(resetBtn)

const add = (firstNum, secNum) => {
  arrToCalc.push(firstNum, secNum)
  console.log(arrToCalc, 'after pushing 2 nums')
  if (arrToCalc.length === 2){
      firstNum = Number(arrToCalc[0])
      secNum = Number(arrToCalc[arrToCalc.length -1])
      sum = firstNum + secNum
      console.log('Sum is:', sum)}
}
  
const subtract = (firstNum, secNum) => {
    arrToCalc.push(firstNum, secNum)
    if (arrToCalc.length === 2){
    firstNum = Number(arrToCalc[0])
    secNum = Number(arrToCalc[arrToCalc.length -1])
    sum = firstNum - secNum
    console.log('Sum is:', sum)
  }
}

const multiply = (firstNum, secNum) => {
  arrToCalc.push(firstNum, secNum)
  if (arrToCalc.length === 2){
    firstNum = Number(arrToCalc[0])
    secNum = Number(arrToCalc[arrToCalc.length -1])
    sum = firstNum * secNum
    console.log('Sum is:', sum)
  }
}
  
const divide = (firstNum, secNum) => {
  arrToCalc.push(firstNum, secNum)
  if (arrToCalc.length === 2){
    firstNum = Number(arrToCalc[0])
    secNum = Number(arrToCalc[arrToCalc.length -1])
    sum = firstNum / secNum
    console.log('Sum is:', sum)
  }
}  
  
calcBtn.addEventListener('click', () => {
  let endPos = numContainer.length
  let signPos = numContainer.indexOf(sign)
  let firstNum = numContainer.slice(0, signPos)
  let secNum = numContainer.slice(signPos + 1, endPos)

  console.log(firstNum, secNum, '2Nums')
  switch(sign) {
      case '+':
        add(firstNum, secNum)
        numContainer = ''
        numContainer += sum
        resultScreen.innerHTML = numContainer
        break
      case '-':
        subtract(firstNum, secNum)
        numContainer = ''
        numContainer += sum
        resultScreen.innerHTML = numContainer
        break
      case '*':
        multiply(firstNum, secNum)
        numContainer = ''
        numContainer += sum
        resultScreen.innerHTML = numContainer
        break
      case '/':
        divide(firstNum, secNum)
        numContainer = ''
        numContainer += sum
        resultScreen.innerHTML = numContainer
        break
      default:
        resultScreen.innerHTML = numContainer
  }
  arrToCalc = []
  sign = ''
  console.log(firstUse)
  firstUse = false
})

numButtGen()
// expressGen()