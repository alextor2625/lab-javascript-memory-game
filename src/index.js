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
  let pairsClicked = document.getElementById('pairs-clicked')
  let pairsGuessed = document.getElementById('pairs-guessed')
  // Bind the click event of each element to a function


  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      memoryGame.pickedCards.push(card)
      card.classList.toggle("turned")
      if (memoryGame.pickedCards.length === 2) {
        if(!(memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("data-card-name"), memoryGame.pickedCards[1].getAttribute("data-card-name")))){
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.toggle("turned")
            memoryGame.pickedCards[1].classList.toggle("turned")
            memoryGame.pickedCards = [];
          }, 3000)
        }
        else{ memoryGame.pickedCards = [];  }
        
        console.log("Pairs Clicked: ",memoryGame.pairsClicked, '\n', "Pairs Guessed: ", memoryGame.pairsGuessed);
        pairsClicked.innerHTML = memoryGame.pairsClicked
        pairsGuessed.innerHTML = memoryGame.pairsGuessed
      }
      // TODO: write some code here
      console.log(`Card clicked:`, card);
      if(memoryGame.checkIfFinished()){
        setTimeout(()=> {
          alert('YOU WIN!!!');
        },500);
      }
    });
  });
});
