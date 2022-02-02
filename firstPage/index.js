// alert("Вам насрали в жопу! Теперь вы должны накормить Пуджа обедом")
const startScreen = document.getElementById('main-screen')
const startBtn = document.getElementById('start-btn')

const govno = document.getElementById('eda-govno')
const cat = document.getElementById('eda-cat')
const pomoi = document.getElementById('eda-pomoi')

const modal = document.getElementById('modal')
const modalText = document.getElementById('modal-text')
const modalBtn = document.getElementById('modal-btn')
const edaImg = document.getElementById('eda-plate')
const dalee = document.getElementById('btn-next')

let chooseEda = ''

const handleClick = (name, text) => {
    chooseEda = name
    const song = new Audio(`../audio/${name}.mp3`)
    song.play()
    modal.style.display = 'block'
    modalText.innerText = text
    edaImg.src = `../img/${name}.jpeg`
}

const getChooseEda = () => {
    if (chooseEda === 'govno') {
        return 'conservi.mp3'
    }
    if (chooseEda === 'cat') {
        return 'nesvej.mp3'
    }
    if (chooseEda === 'pomoi') {
        return 'vegan.mp3'
    }
}

const handleClosed = () => {
    const song = new Audio(`../audio/${getChooseEda()}`)
    song.play()
    modal.style.display = 'none'
    dalee.style.display = 'flex'
}

startBtn.addEventListener('click', () => {
    const song = new Audio(`../audio/start.mp3`)
    song.play()
    startScreen.style.display = 'none'
    
})



govno.addEventListener("click", () => handleClick('govno', 'Кто насрал в тарелку?') )
cat.addEventListener("click", () => handleClick('cat', 'Бедную кошечку?'))
pomoi.addEventListener("click", () => handleClick('pomoi', 'Ммм помои'))

modalBtn.addEventListener("click", handleClosed)

dalee.addEventListener("click", () => {
    window.location.href = '../secondPage/secpage.html'
})