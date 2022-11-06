console.log('%c HI', 'color: firebrick')
let breeds = []

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(data => { 
        data.message.forEach(URL => renderImage(URL)) // all the URLs are stored as an array in message
    }),
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(obj => { 
        breeds = Object.keys(obj.message) // here the breeds are the keys themselves in message
        renderBreed(breeds)
    })
})

function renderImage(URL) {
    let imageContainer = document.getElementById("dog-image-container")
    let dogImage = document.createElement('img')
    dogImage.src = URL
    imageContainer.appendChild(dogImage)
}

function renderBreed(breed) {
    let breedContainer = document.getElementById("dog-breeds")
    for (let dog of breed) {
            let dogBreed = document.createElement('li')
            dogBreed.innerHTML = dog
            breedContainer.appendChild(dogBreed)
    } 
    let listElement = document.querySelectorAll('li')
    for (let li of listElement) {
        li.addEventListener('click', (e) => {
            console.log(e.target.style.color)
            e.target.style.color = 'pink'
        })
    } 
}

