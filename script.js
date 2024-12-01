const buttContainer = document.querySelector('.number-buttons')
const resultScreen = document.querySelector('.show-result')

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
            console.log(btn.id)
            resultScreen.innerHTML += `${btn.id}`
        })
        buttContainer.appendChild(numButt)
})
}

const expressGen = () => {
    const expressions = ['+', '-', '*', '/', 'C', '=']
    for (let i = 0; i < expressions.length; i++){
        let expressButt = document.createElement('button')
        expressButt.classList.add('express-butt')
        expressButt.innerHTML = `${expressions[i]}`
        if (expressButt.innerHTML === 'C'){
            expressButt.classList.add('delete-butt')
        }
        
        buttContainer.appendChild(expressButt)
    }
}
numButtGen()
expressGen()