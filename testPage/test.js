const modalka = document.getElementById('modal-window')
const modalText = document.getElementById('modal-text')
const modalBtn = document.getElementById('modal-btn')
const modalImg = document.getElementById('modal-img')

//Est' -
const ochko = document.getElementById('t-ochko')
const gold = document.getElementById('t-gold')
const norm = document.getElementById('t-norm')


const toiletItemsMap = {
    ['ochko']: {
        text: 'Вы выбрали очко',
        img: './img/please.png',
        audio: ''
    } ,
    ['gold']: {
        text: 'Откуда деньги?',
        img: './img/police.png',
        audio: ''
    } ,
    ['norm']: {
        text: 'Ура нормальный сортик',
        img: './img/cat.jpeg',
        audio: ''
    } 
} 

const openModal = () => {
    modalka.style.display = 'flex'
}

const closeModal = () => {
    modalka.style.display = 'none'
}

const chooseText = (toilet) => {
    modalText.innerText = toiletItemsMap[toilet].text
    modalImg.src = toiletItemsMap[toilet].img
}



ochko.onclick = () => {
    openModal()
    chooseText('ochko')
}

gold.onclick = () => {
    openModal()
    chooseText('gold')
}

norm.onclick = () => {
    openModal()
    chooseText('norm')
}

btn.onclick = () => {
    closeModal()
}
