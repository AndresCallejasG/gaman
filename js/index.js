window.onload=init;
function init(){
    let activeLevel = 0;
    let cardMatchCont = 0;
    
    const cards = document.querySelectorAll('.card');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');
        var urlImage = "./img/cartas/" + this.dataset.code +".png";
        console.log(urlImage);
        this.src = urlImage;

        if (!hasFlippedCard) {
            
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        //hasFlippedCard = false;

        checkForMatch();
    }

    function checkForMatch() {
        
        let isMatch = firstCard.dataset.code === secondCard.dataset.code;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        cardMatchCont = cardMatchCont + 1;
        if(hasWon()){
            console.log("ganasteeee");
        }
        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            var urlBackImage = "./img/cartas/" + firstCard.dataset.level+ "/retirocarta.png";
            firstCard.src = urlBackImage;
            secondCard.src = urlBackImage;
            //lockBoard = false;
            resetBoard();
        }, 1500);

    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function hasWon(){

        if ((2+activeLevel) == cardMatchCont){
            return true;
        }else{
            return false;
        }
        
    }
    
    cards.forEach(card => card.addEventListener('click', flipCard));

}