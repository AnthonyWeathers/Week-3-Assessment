const showColor = evt => {
    evt.preventDefault()

    alert('My favorite color is cobalt')
}

const showPlace = evt => {
    evt.preventDefault()

    alert('My favorite place is at home with my companion, but favorite outside place would have been Wild Water Adventure Park')
}

const showRitual = evt => {
    evt.preventDefault()

    alert('My favorite ritual is spending time with friends, though particularly with my companion most of all')
}

let color = document.getElementById('color')
let place = document.getElementById('place')
let ritual = document.getElementById('ritual')

color.addEventListener('click', showColor)
place.addEventListener('click', showPlace)
ritual.addEventListener('click', showRitual)