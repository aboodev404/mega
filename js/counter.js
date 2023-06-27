// Number Counter
let nums = document.querySelectorAll('.nums .num .num-count')
let section = document.querySelector('.products')
let started = false

function counter() {
    if(window.scrollY >= section.offsetTop) {
        if(!started) {
            nums.forEach((num) => startCount(num))
        }
        started = true
    }
}