let numbers = document.querySelectorAll('.number')
let rating = document.querySelector('.rating')
let selectedNum = Array.from(numbers).find(n=>n.getAttribute('aria-selected')==='true')

numbers.forEach(e => {
    e.addEventListener('click', ()=>{
        numbers.forEach(num => {
            num.setAttribute('aria-selected', false)
        });
    e.setAttribute('aria-selected', true)
    selectedNum = Array.from(numbers).find(n=>n.getAttribute('aria-selected')==='true')
    rating.innerHTML=selectedNum.innerHTML;
    })
});

let submitBtn = document.querySelector('.btn')
let home = document.querySelector('#home')
let tyPage = document.querySelector('#thank-you-page')

submitBtn.addEventListener('click', ()=>{
    home.setAttribute('hidden', true)
    tyPage.removeAttribute('hidden')
})