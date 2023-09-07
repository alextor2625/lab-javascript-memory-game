const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  let cardArray = []
  let pairsClicked = document.getElementById('pairs-clicked')
  let pairsGuessed = document.getElementById('pairs-guessed')
  // Bind the click event of each element to a function


  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      cardArray.push(card)
      card.classList.toggle("turned")
      if (cardArray.length === 2) {
        if(!(memoryGame.checkIfPair(cardArray[0].getAttribute("data-card-name"), cardArray[1].getAttribute("data-card-name")))){
          setTimeout(() => {
            cardArray[0].classList.toggle("turned")
            cardArray[1].classList.toggle("turned")
            cardArray = [];
          }, 3000)
        }
        else{ cardArray = [];  }
        
        // console.log("Pairs Clicked: ",memoryGame.pairsClicked, '\n', "Pairs Guessed: ", memoryGame.pairsGuessed);
        pairsClicked.innerHTML = memoryGame.pairsClicked
        pairsGuessed.innerHTML = memoryGame.pairsGuessed
      }
      card.getAttribute("data-card-name");
      // TODO: write some code here
      
      // setTimeout(() => {
      //   card.classList.toggle("turned")
      // }, 3000)
      console.log(`Card clicked:`, card);
    });
  });
});
