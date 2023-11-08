const flashcards = document.querySelectorAll('.flashcard');
let currentIndex = 0;

function flipCard() {
  flashcards[currentIndex].classList.toggle('flipped');
}

function showCard(index) {
  flashcards.forEach((card, i) => {
    if (i === index) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function showNextCard() {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    showCard(currentIndex);
  }
}

function showPrevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    showCard(currentIndex);
  }
}

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

nextBtn.addEventListener('click', showNextCard);
prevBtn.addEventListener('click', showPrevCard);
showCard(currentIndex);

function toggleAnswer(card) {
  const front = card.querySelector('.flashcard-front');
  const back = card.querySelector('.flashcard-back');
  front.classList.toggle('hidden');
  back.classList.toggle('hidden');
}

const showAnswerBtns = document.querySelectorAll('.show');
showAnswerBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    toggleAnswer(flashcards[index]);
  });
});
