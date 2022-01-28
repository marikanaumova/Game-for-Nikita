const ochko = document.getElementById('t-ochko')
const gold = document.getElementById('t-gold')
const norm = document.getElementById('t-norm')
const modalBtn = document.getElementById('modal-btn')
const modalClosed = document.getElementById('modal')
const closedText = document.getElementById('rasskaz')
const toilets = document.getElementById('toilets')

// modalka ===>


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
};

modalBtn.onclick = () => {
    modalClosed.style.display = 'flex'  
}

gold.onclick = () => {
    modalClosed.style.display = 'flex'
    clickSound = new Audio (`../audio/police.mp3`)
    clickSound.play()
}

modalBtn.onclick = () => {
    modalClosed.style.display = 'none'
}




// mybutton.onclick = () => {
//     setTimeout( () => {
//         console.log('ЗАСКАМИЛИ ЛОХА')
//     }, 2000);
//     const song = new Audio('./audio/alarm.mp3')
//     song.play();
    
// };


