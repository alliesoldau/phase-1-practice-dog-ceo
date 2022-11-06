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
    console.log(URL)
    let imageContainer = document.getElementById("dog-image-container")
    let dogImage = document.createElement('img')
    dogImage.src = URL
    imageContainer.appendChild(dogImage)
}

function renderBreed(breed) {
    console.log(breed)
    let breedContainer = document.getElementById("dog-breeds")
    for (let dog of breed) {
            let dogBreed = document.createElement('li')
            dogBreed.innerHTML = dog
            breedContainer.appendChild(dogBreed)
    }   
}