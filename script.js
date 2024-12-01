const buttContainer = document.querySelector('.number-buttons')
const resultScreen = document.querySelector('.show-result')
let currInput = ''
let currExpress = ''

const numButtGen = () => {
    let numButtArr = []
    for (let i = 1; i <= 9; i++){
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
            currInput += `${btn.id}`
            resultScreen.innerHTML = currInput
        })
        buttContainer.appendChild(numButt)
})
}

const expressGen = () => {
    let expressButtArr = []
    const expressions = ['+', '-', '*', '/', 'C', '=']
    for (let i = 0; i < expressions.length; i++){

        let expressObj = {
            express : expressions[i]
        }
        expressButtArr.push(expressObj)
    }
    
    expressButtArr.forEach((btn) => {
        let expressButt = document.createElement('button')
        expressButt.classList.add('express-butt')
        expressButt.innerHTML = `${btn.express}`
        if (expressButt.innerHTML === 'C'){
            expressButt.classList.add('delete-butt')
        }
        expressButt.addEventListener('click', (e) => {
            currExpress = `${e.target.innerHTML}`
            if (currExpress === '='){
                if (expressions.includes(currInput[currInput.length - 1])){
                    resultScreen.innerHTML = NaN
                    currExpress = ''
                    currInput = ''
                } else {
                    let result = calcInput(currInput)
                    currExpress = ''
                    currInput = ''
                    resultScreen.innerHTML = result
                }
                
            }
            if (currExpress === 'C'){
                currInput = currInput.slice(0, currInput.length - 1)
                resultScreen.innerHTML = currInput
            } else {
                currInput += currExpress
                resultScreen.innerHTML += `${currExpress}`}
                currExpress = ''
        })
        buttContainer.appendChild(expressButt)
    })
}

const calcInput = (mathString) => {
    let resultCalc = eval(mathString)
    return resultCalc
}

numButtGen()
expressGen()