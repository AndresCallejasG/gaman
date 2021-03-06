window.onload=init;
let activeLevel = 0;
let cardMatchCont = 0;
let btnLevel1;
var btnLevel2;
var btnLevel3;
var btnLevel4;
var btnLevel5;

function init(){

    loadSplash(); 

    

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

    btnLevel1=document.getElementById("btnNivel1");
    btnLevel2=document.getElementById("btnNivel2");
    btnLevel3=document.getElementById("btnNivel3");
    btnLevel4=document.getElementById("btnNivel4");
    btnLevel5=document.getElementById("btnNivel5");

    var btnSiguiente1=document.getElementById("btnSiguiente1");
    var btnSiguiente2=document.getElementById("btnSiguiente2");
    var btnSiguiente3=document.getElementById("btnSiguiente3");
    var btnSiguiente4=document.getElementById("btnSiguiente4");
    var btnSiguiente5=document.getElementById("btnSiguiente5");

    var modal1 = document.getElementById("modal1");
    var modal2 = document.getElementById("modal2");
    var modal3 = document.getElementById("modal3");
    var modal4 = document.getElementById("modal4");
    var modal5 = document.getElementById("modal5");

    btnSiguiente1.addEventListener("click",function(){
        modal1.style.display ="none";
        change("cardsGame1Section","cardsGame1gif");
        setTimeout(function() {
            change("cardsGame1gif","cardsGame2Section");                        
        }, 10000);

    });
    btnSiguiente2.addEventListener("click",function(){
        modal2.style.display ="none";
        change("cardsGame2Section","cardsGame2gif");
        setTimeout(function() {
            change("cardsGame2gif","cardsGame3Section");                        
        }, 10000);
    });
    btnSiguiente3.addEventListener("click",function(){
        modal3.style.display ="none";
        change("cardsGame3Section","cardsGame3gif");
        setTimeout(function() {
            change("cardsGame3gif","cardsGame4Section");                        
        }, 10000);
    });
    btnSiguiente4.addEventListener("click",function(){
        debugger;
        modal4.style.display ="none";
        
        modal1.style.display="none";
        change("cardsGame4Section","cardsGame4gif");
        
        setTimeout(function() {
            change("cardsGame4gif","cardsGame5Section");                        
        }, 10000);
        
    });  


    //add events
    
    btnCardsGame.addEventListener("click",function(){
        change("menuSection","cardsMenuSection");
    });
    btnCredits.addEventListener("click",function(){
        change("menuSection","creditsSection");
    });
    btnLevel1.addEventListener("click",function(){
        activeLevel = 1;
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

    /*Credits*/
    var btnBackCredits=document.getElementById("btnBackCredits");    
    var btnHomeCredits=document.getElementById("btnHomeCredits");
    
    //Botones Creditos
    btnBackCredits.addEventListener("click",function(){
        change("creditsSection","cardsMenuSection");
    });
    btnHomeCredits.addEventListener("click",function(){
        change("creditsSection","menuSection");
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
            setTimeout(function() {
                console.log("active:" +  activeLevel);
                console.log("parejas: " + cardMatchCont);
                cardMatchCont = 0;
                switch(activeLevel){
                    case 1:
                    btnLevel2.addEventListener("click",function(){
                        activeLevel = 2;
                        change("cardsMenuSection","cardsGame2Section");
                    });
                    modal1.style.display = "block";
                    activeLevel = 2;
                    btnLevel2.src = "./img/botones/nivel2rayo.png"
                    
                    
                    
                    break;

                    case 2:
                    btnLevel3.addEventListener("click",function(){
                        activeLevel = 3;           
                        change("cardsMenuSection","cardsGame3Section");
                    });
                    modal2.style.display = "block";
                    activeLevel = 3;
                    btnLevel3.src = "./img/botones/nivel3aracne.png" 
                    
                    
                    break; 
                    
                    case 3:
                    btnLevel4.addEventListener("click",function(){
                        activeLevel = 4;
                        change("cardsMenuSection","cardsGame4Section");
                    });
                    modal3.style.display = "block";
                    activeLevel = 4;
                    btnLevel4.src = "./img/botones/nivel4evaky.png"                    
                    
                    
                    break;

                    case 4:
                    btnLevel5.addEventListener("click",function(){
                        activeLevel = 5;
                        change("cardsMenuSection","cardsGame5Section");
                    });
                    modal4.style.display = "block";
                    activeLevel = 5;
                    btnLevel5.src = "./img/botones/nivel5socrates.png"
                    
                    

                    case 5:
                    modal5.style.display="block";
                    setTimeout(function(){
                        modal5.style.display ="none";
                        modal4.style.display="none";
                        modal3.style.display ="none";
                        modal2.style.display="none";
                        modal1.style.display ="none";
                        document.getElementById("cardsGame4Section").style.display="none";
                    },2000)
                    
                    
                    change("cardsGame5Section","cardsGame5gif");
                    setTimeout(function() {
                        change("cardsGame5gif","menuSection");                        
                    }, 10000);
                    
                    


                    
                    
                }
              }, 1000);
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
    }, 4700);
}