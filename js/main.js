let elInp = document.querySelector('.info__inp2')
let elInp2 = document.querySelector('.info__inp')
let elForm = document.querySelector('.form')
let elList = document.querySelector('.li')
let elSec = document.querySelector('.sec')
let elBtn = document.querySelector('.info__btn')
let elBtn2 = document.querySelector('.info__btn1')
let title = document.querySelector('.title')
let elModal = document.querySelector('.modal')
let body = document.querySelector('body')
let elShadow = document.querySelector('.shadow')
let email = '';
let parol = 123


elBtn.addEventListener('click', ()=>{
    elModal.classList.add('modal__open')
    elShadow.classList.add('shadow__open')
    document.querySelector('body').style.overflow = 'hidden'
    if(elInp2.length + 3){
        console.log('ok');
    }else{
        console.log('yoq');
    }
})

elShadow.addEventListener('click', ()=>{
    elModal.classList.remove('modal__open')
    elShadow.classList.remove('shadow__open')
    document.querySelector('body').style.overflow = 'auto'
})






elBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(elInp2.value == email && elInp.value == parol){
        elModal.classList.add('showmodal')
        elInp.style.backgroundColor = 'rgb(81, 231, 81)'
        elInp.classList.add('togri')
        elInp2.classList.add('togri')
        title.textContent = 'Javobingiz hisobga olindi.'
        title.style.color = 'white'
        elModal.style.boxShadow = '0px 0px 8px green'
        body.style.overflow = 'hidden'
        
    }else if (elInp.value == '' ){
        elModal.classList.add('showmodal')
        title.textContent = "Bo'sh ma'lumot"
        elInp.style.backgroundColor = 'inherit'
        title.style.color = 'yellow'
        elModal.style.boxShadow = '0px 0px 8px yellow'
        body.style.overflow = 'hidden'
    }   
    else {
        elInp2.classList.add('showmodal')
        title.textContent = 'Siz hato kiritdingiz'
        elInp2.classList.add('hatoku')
        elInp.classList.add('hatoku')
        title.style.color = 'red'
        elModal.style.boxShadow = '0px 0px 8px red'
        body.style.overflow = 'hidden'
    }
})




// TEPASI BOSHQA   VAZIFA

// let elMin = document.querySelector(".min")
// let elSec = document.querySelector('.sec')
// let elLineInner = document.querySelector('.line__inner')
// let sec = 150
// let min = Math.floor(sec / 60)
// let secStep = sec % 60
// elSec.textContent = secStep
// elMin.textContent = min
// let count = 100
// const clearSec = setInterval(()=>{
//     secStep = secStep - 1
//     elSec.textContent = secStep
//     if(min == 0 && secStep == 0){
//         clearInterval(clearSec)
//         elLineInner.style.width = '0%'
//     }

//     if(secStep <=0){
//         secStep = 60
//         min = min - 1
//         elMin.textContent = min
//     }
//     if(min < 0){
//         elMin.textContent = 0
//     }
// },100)

// let lineStep = 100 / sec
// setInterval(() => {
//     count = count - lineStep
//     e.LineInner.style.width = `${count}%`
// },100)




//  ikkalsi boshqa ##############






// let elInp = document.querySelector('.inp')
// let elForm = document.querySelector('.form')
// let elBtn = document.querySelector('.btn')
// const setTim = setTimeout(()=>{
//     clearInterval(setInt)
// }, 5000)

// const setInt = setInterval(()=>{
//     console.log('okk');
// }, 100)

// elBtn.addEventListener('click', ()=>{
//     clearInterval(setTim)
//     clearTimeout(setTim)
// })

// elForm.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     let a = elInp.value
//     const timeInt = setInterval(()=>{
//         console.log(a);
//         a -= 1
//         if(a == -1){
//             clearInterval(timeInt)
//         }
//     }, 500)
// })