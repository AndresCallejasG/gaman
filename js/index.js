window.onload=init;

function init(){

    loadSplash(); 

    let activeLevel = 0;
    let cardMatchCont = 0;

    //Navegacion

    //Botones Menu inicial
    var btnCardsGame=document.getElementById("btnCardsGame");
    var btnMemory=document.getElementById("btnMemoryGame");
    var btnCredits=document.getElementById("btnCredits");

    //Botones estrellas gemelas   
    
    var btnHomeCards=document.getElementById("btnHome");
    
    var btnBack1=document.getElementById("btnBack1");    
    var btnHome1=document.getElementById("btnHome1");   
    var btnBack2=document.getElementById("btnBack2");    
    var btnHome2=document.getElementById("btnHome2");
    
    var btnBack3=document.getElementById("btnBack3");    
    var btnHome3=document.getElementById("btnHome3");
    
    var btnBack4=document.getElementById("btnBack4");    
    var btnHome4=document.getElementById("btnHome4");
    
    var btnBack5=document.getElementById("btnBack5");    
    var btnHome5=document.getElementById("btnHome5");

    var btnLevel1=document.getElementById("btnNivel1");
    var btnLevel2=document.getElementById("btnNivel2");
    var btnLevel3=document.getElementById("btnNivel3");
    var btnLevel4=document.getElementById("btnNivel4");
    var btnLevel5=document.getElementById("btnNivel5");


    //add events
    
    btnCardsGame.addEventListener("click",function(){
        change("menuSection","cardsMenuSection");
    });
    btnCredits.addEventListener("click",function(){
        change("menuSection","creditsSection");
    });
    btnLevel1.addEventListener("click",function(){
        change("cardsMenuSection","cardsGame1Section");
    });

    btnHome.addEventListener("click",function(){
        change("cardsMenuSection","menuSection");
    });
    //Botones nivel1
    btnBack1.addEventListener("click",function(){
        change("cardsGame1Section","cardsMenuSection");
    });
    btnHome1.addEventListener("click",function(){
        change("cardsGame1Section","menuSection");
    });
    //Botones nivel2
    btnBack2.addEventListener("click",function(){
        change("cardsGame2Section","cardsMenuSection");
    });
    btnHome2.addEventListener("click",function(){
        change("cardsGame2Section","menuSection");
    });
    //Botones nivel3
    btnBack3.addEventListener("click",function(){
        change("cardsGame3Section","cardsMenuSection");
    });
    btnHome3.addEventListener("click",function(){
        change("cardsGame3Section","menuSection");
    });
    //Botones nivel4
    btnBack4.addEventListener("click",function(){
        change("cardsGame4Section","cardsMenuSection");
    });
    btnHome4.addEventListener("click",function(){
        change("cardsGame4Section","menuSection");
    });
    //Botones nivel5
    btnBack5.addEventListener("click",function(){
        change("cardsGame5Section","cardsMenuSection");
    });
    btnHome5.addEventListener("click",function(){
        change("cardsGame5Section","menuSection");
    });
    
    
    /* Logica juego de memoria */

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', flipCard));

    

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

    
    

}
function change(id_hide,id_show){
    document.getElementById(id_hide).style.display="none";
    document.getElementById(id_show).style.display="block";
}

function loadSplash(){
    setTimeout(function() {
      document.getElementById("splashSection").style.display = "none";
      document.getElementById("menuSection").style.display = "block";
    }, 4800);
}