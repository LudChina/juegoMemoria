

    //opciones de carta
    const cardArray = [
        {
            name: 'rick',
            img: 'images/rick.png'
        },
        {
            name: 'rick',
            img: 'images/rick.png'
        },
        {
            name: 'summer',
            img: 'images/summer.png'
        },
        {
            name: 'summer',
            img: 'images/summer.png'
        },
        {
            name: 'morty',
            img: 'images/morty.png'
        },
        {
            name: 'morty',
            img: 'images/morty.png'
        },
        {
            name: 'beth',
            img: 'images/beth.png'
        },
        {
            name: 'beth',
            img: 'images/beth.png'
        },
        {
            name: 'jerry',
            img: 'images/jerry.png'
        },
        {
            name: 'jerry',
            img: 'images/jerry.png'
        },
        {
            name: 'abradolf',
            img: 'images/abradolf.png'
        },
        {
            name: 'abradolf',
            img: 'images/abradolf.png'
        },
    ]

    
    cardArray.sort(() => 0.5 - Math.random())

    const gridDisplay = document.querySelector('#grid')
    const resultsDisplay = document.querySelector('#result')
    const game = document.querySelector('#game')
    let cardsChosen = []
    let cardsChosenId = []
    let cardWon = []



    //crear tablero 
function crearTablero() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/background.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

crearTablero()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/background.png')
        cards[optionTwoId ].setAttribute('src', 'images/background.png')
        alert('Elegiste la misma imagen')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
        //alert('Encontraste una coincidencia'){
        game.textContent = 'Encontraste una coincidencia'
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', '/images/background.png')
        cards[optionTwoId].setAttribute('src', '/images/background.png')
        game.textContent = 'Vuelve a intentar'
    }

    
    cardsChosen = []
    cardsChosenId = []
    resultsDisplay.textContent = cardWon.length
    if (cardWon.length === cardArray.length/2){
        game.textContent = 'Felicidades! Has ganado!!'
    }
}

//flip cartas
function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}; 

flipCard()
   
   




