const put = document.getElementById('put')
const putz = document.getElementById('putz')
const pan = document.getElementById('pan')

let translate = document.getElementById('translate')

putz.addEventListener('click', function() {
    let sentence = document.getElementById('sentence')
    sentence.innerText = 'putzing around.'
    putz.style.backgroundColor = 'lime'
})

translate.addEventListener('click', function() {
    let sentence = document.getElementById('sentence')
    translate.innerText = 'Ela tá afim de não fazer nada.'
    setTimeout(() => {
        translate.innerHTML = 'Translate'
    }, 2000);
})