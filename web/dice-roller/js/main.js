const d20 = document.querySelector('#d20')
const d6 = document.querySelector('#d6')
const d20msg = document.querySelector('#d20-roll')
const d6msg = document.querySelector('#d6-roll')

d20.addEventListener('click', _ => {
    d20msg.innerText = roll(20)
})

d6.addEventListener('click', _ => {
    d6msg.innerText = roll(6)
})

function roll (sides) {
    return Math.floor(Math.random() * sides + 1);
}