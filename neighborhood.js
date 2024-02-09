const randomRecommend = evt => {
    evt.preventDefault()

    randomRestaurant(evt)
}

const randomRestaurant = (evt) => {
    const restaurants = ["Yosemite Falls Cafe", "Huckleberry's Breakfast & Lunch", "Cafe Leon Mexican Restaurant", "Chubby's Dinner", "Aromas Restaurant", "Sakura", "Fleming's Prime Steakhouse & Wine Bar"];
    const random = Math.floor(Math.random() * restaurants.length);

    const ranRestaurant = restaurants[random]

    // Puts them in a bulleted list, but may have repeats of the same restaurant
    let list = document.createElement('ul')
    let restaurant = document.createElement('li')
    let rec = document.createElement('span')
    rec.textContent = ranRestaurant

    restaurant.appendChild(rec)
    list.appendChild(restaurant)
    document.body.appendChild(list)

    
    // Making them as paragraphs
    // let paragraph = document.createElement('p')
    // paragraph.textContent = ranRestaurant
    // document.body.appendChild(paragraph)
}

let recommend = document.getElementById('recommend')

recommend.addEventListener('click', randomRecommend)