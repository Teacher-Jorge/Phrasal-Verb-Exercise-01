const put = document.getElementById('put')
const putz = document.getElementById('putz')
const pan = document.getElementById('pan')

let translate = document.getElementById('translate')

putz.addEventListener('click', function() {
    let sentence = document.getElementById('sentence')
    sentence.innerText = 'putzing around.'
    putz.style.backgroundColor = 'lime'
    putz.style.color = 'green'
})

put.addEventListener('click', function() {
    let img1 = document.getElementById('img1')
    img1.style.opacity = '0'
    let img2 = document.getElementById('img2')
    img2.style.opacity = '1'
    setTimeout(() => {
        img1.style.opacity = '1'
        img2.style.opacity = '0'
    }, 1000);
    put.style.backgroundColor = 'red'
    put.style.color = 'yellow'
    
})

pan.addEventListener('click', function() {
    let img1 = document.getElementById('img1')
    img1.style.opacity = '0'
    let img2 = document.getElementById('img2')
    img2.style.opacity = '1'
    img2.style.opacity = '1'
    setTimeout(() => {
        img1.style.opacity = '1'
        img2.style.opacity = '0'
    }, 1000);
    pan.style.backgroundColor = 'red'
    pan.style.color = 'yellow'
})

translate.addEventListener('click', function() {
    let sentence = document.getElementById('sentence')
    translate.innerText = 'Ela tá afim de não fazer nada.'
    setTimeout(() => {
        translate.innerHTML = 'Translate'
    }, 2000);
})

