const characterContainer = document.querySelector('.character-card-container')

class CharacterCard {
    constructor(name, image, bio, status) {
        this.name = name;
        this.search = this.name.toLowerCase().split(" ");
        this.image = image;
        this.bio = bio;
        this.status = status
    }
}

//////////////////////////////
// Current Characters
/////////////////////////////
const rhaenyraTargaryen = new CharacterCard("Rhaenyra Targaryen", "./character-images/rhaenyra.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis!","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis!")

const alicentHightower = new CharacterCard("Alicent Hightower", "./character-images/alicent.jpg","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis!","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis!")

const kingViserys = new CharacterCard("King Viserys", "./character-images/viserys.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis!","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis!")

const daemonTargaryen = new CharacterCard("Daemon Targaryen", "./character-images/daemon.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis!","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis!")

const laenorVelaryon = new CharacterCard("Laenor Velaryon", "./character-images/laenor.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis!","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis!")

const laenaVelaryon = new CharacterCard("Laena Velaryon", "./character-images/laena.jpg","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis!","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere qui velit similique, consequuntur vel delectus nostrum. Natus odit eos excepturi quas facere ea totam temporibus! Perspiciatis ut quisquam ea reiciendis!")

const characterArray = [rhaenyraTargaryen, alicentHightower, kingViserys, daemonTargaryen, laenorVelaryon, laenaVelaryon]

const createCharacters = (character) => {
    const card = document.createElement('div')
    card.classList.add("character-card")
    const heading = document.createElement('h1')
    heading.innerText = character.name
    const image = document.createElement('img')
    image.src = character.image
    const buttons = document.createElement('div')
    buttons.classList.add('character-buttons')
    const bio = document.createElement('button')
    const status = document.createElement('button')
    bio.innerText = "Bio"
    status.innerText = "Status"
    bio.classList.add('bio')
    status.classList.add('status')
    bio.addEventListener('click', characterDisplay)
    status.addEventListener('click', characterDisplay)
    buttons.appendChild(bio)
    buttons.appendChild(status)
    card.appendChild(heading)
    card.appendChild(image)
    card.appendChild(buttons)
    characterContainer.appendChild(card) 
}

const printCharacters = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        createCharacters(arr[i])
    }
}

const search = () => {
    // get and clean up the user input to match the style of the searchable terms
    const str = document.getElementById('search').value.toLowerCase()
    document.getElementById('search').value = ""
    
    // we will write results to an array to use the printCharacter function and allow for multiple results
    let results = []
    // we fill first clear the characterContainer
    while (characterContainer.firstChild) {
        characterContainer.firstChild.remove()
    }
    if (str == "") {
        printCharacters(characterArray)
    } else {
        characterArray.forEach((char) => {
            char.search.forEach((element) => {
                if (element == str) {
                    results.push(char)
                }
            })
        })
        if (results.length > 0) {
            printCharacters(results)
        } else {
            
            let par = document.createElement('p')
            par.innerText = "Sorry, no results were found. Please try again, or leave search field blank to display all characters."
            characterContainer.appendChild(par)
        }
    }

}

const characterDisplay = (element) => {
    console.log(element.target)
    const buttons = element.target.parentElement
    const container = buttons.parentElement
    const targetName = container.firstChild.innerText
    let targetIndex = null
    characterArray.forEach((character, ind) => {
        if(character.name === targetName) {
            targetIndex = ind
        }
    })
    const newText = document.createElement('article')
    newText.classList.add('about')
    const node = element.target.innerText == 'Bio'?characterArray[targetIndex].bio:characterArray[targetIndex].status
    console.log(node)
    newText.innerText = node
    container.replaceChild(newText, container.querySelector('img'))
// still need to finish this to replace buttons
}

addEventListener('DOMContentLoaded', printCharacters(characterArray))