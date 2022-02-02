const ochko = document.getElementById('t-ochko')
const gold = document.getElementById('t-gold')
const norm = document.getElementById('t-norm')
const modalBtn = document.getElementById('modal-btn')
const modalClosed = document.getElementById('modal')
const closedText = document.getElementById('rasskaz')
const toilets = document.getElementById('toilets')

const modalka = document.getElementById('modal-window')
const modalText = document.getElementById('modal-text')
const modalImg = document.getElementById('modal-img')

// Открытие кнопочек для попочек ===>


const mybutton = document.getElementById('btnNext')
mybutton.onclick = () => {
    setTimeout( () => {
        closedText.style.display = 'flex'
        setTimeout( () => {
            toilets.style.display = 'flex'
        }, 500)
        
    }, 200)
    
    mybutton.style.display = 'none'
    clickSound = new Audio (`../audio/svin.mp3`)
    clickSound.play()

    // backgroundSound = new Audio (`../audio/robocop.mp3`)
    // backgroundSound.play()
};

// Key value

const toiletItemsMap = {
    ['ochko']: {
        text: 'Пудж провалился в сортик',
        img: '../img/vlada4.jpeg',
        audio: '../audio/elkipalki.mp3'
    } ,
    ['gold']: {
        text: 'Откуда деньги?',
        img: '../img/police.png',
        audio: '../audio/police.mp3'
    } ,
    ['norm']: {
        text: 'Ура нормальный сортик',
        img: '../img/cat.jpeg',
        audio: '../audio/cat.mp3'
    } 
} 

// Открытие модалки и закрытие модалки ====>

const openModal = () => {
    modalka.style.display = 'flex'
}

const closeModal = () => {
    modalka.style.display = 'none'
}

// Вывод инфы для модалки от obj

const chooseText = (toilet) => {
    modalText.innerText = toiletItemsMap[toilet].text
    modalImg.src = toiletItemsMap[toilet].img
    const song = new Audio(toiletItemsMap[toilet].audio)
    song.play()

}

// const audioButton = new Audio(``)
// audioButton.play()



// Вызов по ключу

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

// Закрытие модалки

modalBtn.onclick = () => {
    closeModal()
}


//ЗАБЕЙ
// gold.onclick = () => {
//     modalClosed.style.display = 'flex'
//     clickSound = new Audio (`../audio/police.mp3`)
//     clickSound.play()
// }
// НЕ СМОТРИ СЮДА

// Закрытие модалки onclick ===>
 


// mybutton.onclick = () => {
//     setTimeout( () => {
//         console.log('ЗАСКАМИЛИ ЛОХА')
//     }, 2000);
//     const song = new Audio('./audio/alarm.mp3')
//     song.play();
    
// };


