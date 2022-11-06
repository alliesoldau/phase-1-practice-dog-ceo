console.log('%c HI', 'color: firebrick')
let breeds = []
let lettersArray = []
let optionsContainer = document.getElementById("breed-dropdown")

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
            dogBreed.id = dog
            breedContainer.appendChild(dogBreed)
    } 
    let listElement = document.querySelectorAll('li')
    for (let li of listElement) {
        li.addEventListener('click', (e) => {
            // console.log(e.target.style.color)
            e.target.style.color = 'pink'
        })
    }
    for (let li of listElement) {
        let firstLetter = li.innerText[0]
        if (lettersArray.includes(firstLetter)) {
        } else {
            lettersArray.push(firstLetter)
        }
    }
    lettersArray.forEach(letter => renderOptions(letter))

    function renderOptions(letter) {
        let optionElement = document.createElement("option")
        optionElement.value = letter
        optionElement.innerHTML = letter
        optionsContainer.append(optionElement)
    
        let optionsList = document.querySelector('#breed-dropdown')
        optionsList.addEventListener('change', (event) => changeBreedView(event))
    }
}

function changeBreedView(event) {
    let targetLetter = event.target.value
    breeds.forEach(breed => {
        if (breed[0] === targetLetter) {
            document.getElementById(breed).style.display = "block"
        } else {
            document.getElementById(breed).style.display = "none"
        }
    })
}