const generateButton = document.querySelector('button')
const color = document.querySelectorAll('.color')
const hexVal = document.querySelectorAll('.hex')

generateButton.addEventListener('click', generateColors)

function generateColors(){

    for(let i = 0; i < color.length; i++){
        const randomColor = Math.floor(Math.random() * 16777215).toString(16)
        color[i].style.backgroundColor = '#' + randomColor

        color[i].classList.add('fade-in')
        setTimeout(() => color[i].classList.remove('fade-in'),150);
        hexVal[i].innerHTML = "#" + randomColor
    }
}

generateColors()