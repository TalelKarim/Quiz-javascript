
// Initiation des variables 
let choix =  document.querySelectorAll('input').value;


let Rating =document.querySelector('.rating');

Rating.style.display = "none";

let bouton = document.querySelector('button');

//bouton.disabled ="true";
let  resultat = document.querySelector('.score');

const premiereQues = document.querySelectorAll('.first-ques > input');
const secondQues = document.querySelectorAll('.second-ques > input');
const thirdQues = document.querySelectorAll('.third-ques > input');
const fourthQues = document.querySelectorAll('.fourth-ques > input');
const fifthQues = document.querySelectorAll('.fifth-ques > input');
const sixthQues = document.querySelectorAll('.sixth-ques > input');
const seventhQues = document.querySelectorAll('.seventh-ques > input');
const eithQues = document.querySelectorAll('.eith-ques > input');
const ninthQues = document.querySelectorAll('.ninth-ques > input');
const tenthQues = document.querySelectorAll('.tenth-ques > input');

const Questions = [premiereQues, secondQues, thirdQues, fourthQues, fifthQues,sixthQues,seventhQues,eithQues,ninthQues,tenthQues];

const contenu = document.querySelector(".content");
const fillAll = document.querySelector(".remplirTous")
var checkedAnswers = 0;
var score = 0;
var rank = 0;



//const CorrectAnswers = ['list-style-type : none', '<a>' , 'padding-right' , 'hidden' , 'de 200px à l infini ']; 
   
// verification que tous les réponses sont saisies 
      
     for(let i=0 ; i<Questions.length; i++){
            for(let j=0; j<Questions[i].length; j++){
                
                Questions[i][j].addEventListener('change',function(){
                    checkedAnswers ++; 
                })
            }
        }  
        
       


// ne pouvant saisir qu'une seule réponse       
   function oneAnswerPossible(){
    for(let i=0; i< Questions.length ; i++){
        for(let j =0; j<Questions[i].length ; j++){
            if (Questions[i][j].checked){
                for(let k =0 ; k < Questions[i].length; k++){
                    if (k !== j){
                        Questions[i][k].disabled = "true";
                          }
                    }
                    Questions[i][j].addEventListener('change', function(){
                       for(let k=0; k < Questions[i].length; k++){
                           Questions[i][k].disabled = false;
                       }

                    })    
                }
            }
        }
} 



for (let i=0; i<Questions.length ; i++){
    for (let j=0; j< Questions[i].length; j++){
        Questions[i][j].addEventListener('change', oneAnswerPossible);
    }
}

/*
 function removeCheck(){
     
     for (let i=0; i<Questions.length; i++){
         var checked =0;
         for(let j=0 ; j<Questions[i].length ; j++){
             if (Questions[i][j].checked){
                  checked ++;
             }
         }
         if (checked ==0){
             for(let k=0; k<Questions[i].length; k++){
                 Questions[i][k].disabled ="false";
             }
         }
     }
 }
   

  

  for (let i=0; i<Questions.length ; i++){
    for (let j=0; j< Questions[i].length; j++){
        Questions[i][j].addEventListener('change', removeCheck);
    }
}

 
   
 */

     
      
     
     
  


// calcul du score 
  
 function Score(){
    
    
    let trueOne = document.querySelector('#true-one').checked;
    let trueTwo = document.querySelector('#true-two').checked;
    let trueThree = document.querySelector('#true-three').checked;
    let trueFour = document.querySelector('#true-four').checked;
    let trueFive = document.querySelector('#true-five').checked;
    
    let trueSix = document.querySelector('#true-six').checked;
    let trueSeven = document.querySelector('#true-seven').checked;
    let trueEight = document.querySelector('#true-eight').checked;
    let trueNine = document.querySelector('#true-nine').checked;
    let trueTen = document.querySelector('#true-ten').checked;
    
    let trueAnswers = [trueOne, trueTwo, trueThree, trueFour, trueFive, trueSix, trueSeven, trueEight, trueEight, trueNine, trueTen];


    if (checkedAnswers < 10) {
        fillAll.textContent = "Veuillez Remplir Tous les Champs ! "
     }

    for(let i=0; i < trueAnswers.length ; i++){
        if(trueAnswers[i]){
            score += 10;
        }
    }
    
    

  /*   if (trueOne){
         score +=10;
        
     }

     if (trueTwo){
        score +=10;
    }
      
    if (trueThree){
        score +=10;
        
    }
    
    if (trueFour){
        score +=10;
    }
    
    if (trueFive){
        score +=10;
    }*/
    
    rank = score/20;
    if(checkedAnswers == 10){
        resultat.textContent = 'Votre Score final: ' + score + '/100';
        score = 0;
        fillAll.style.display = "none";
        Rating.style.display = "block";
    for (let i=0 ; i< Math.floor(rank); i++){
       Rating.children[i].style.color = '#FFD700';
    } 
    
    }
    
    
 }

// Affichage du rang en étoiles 



bouton.addEventListener('click',Score);

