
// Initiation des variables 
let choix =  document.querySelectorAll('input').value;


let Rating =document.querySelector('.rating');

Rating.style.display = "none";

let bouton = document.querySelector('button');


let  resultat = document.querySelector('.score');

const premiereQues = document.querySelectorAll('.first-ques > input');
const secondQues = document.querySelectorAll('.second-ques > input');
const thirdQues = document.querySelectorAll('.third-ques > input');
const fourthQues = document.querySelectorAll('.fourth-ques > input');
const fifthQues = document.querySelectorAll('.fifth-ques > input');

const Questions = [premiereQues, secondQues, thirdQues, fourthQues, fifthQues];




var score = 0;
var rank = 0;



//const CorrectAnswers = ['list-style-type : none', '<a>' , 'padding-right' , 'hidden' , 'de 200px à l infini ']; 
   
// verification que tous les réponses sont saisies 
 
    

   

    for(let i=0; i< Questions.length ; i++){
               for(let j =0; j<Questions[i].length ; j++){
                   if (Questions[i][j].checked){
                       for(let k =0 ; k < Questions[i].length; k++){
                           if (k !== j){
                               Questions[i][k].disabled = "true";
                           }
                       }
                   }
               }
     } 
 

  


// calcul du score 
  
 function Score(){
    
    
    for(let i=0; i< Questions.length ; i++){
        for(let j =0; j<Questions[i].length ; j++){
            if (Questions[i][j].checked){
                for(let k =0 ; k < Questions[i].length; k++){
                    if (k !== j){
                        Questions[i][k].disabled = "true";
                    }
                }
            }
        }
} 

    let trueOne = document.querySelector('#true-one').checked;
    let trueTwo = document.querySelector('#true-two').checked;
    let trueThree = document.querySelector('#true-three').checked;
    let trueFour = document.querySelector('#true-four').checked;
    let trueFive = document.querySelector('#true-five').checked;
    

    

     if (trueOne){
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
    }
    
    rank = score / 10;
    Rating.style.display = "block";
    for (let i=0 ; i<rank; i++){
       Rating.children[i].style.color = '#FFD700';
    } 
     resultat.textContent = 'Votre Score final:  ' + score + '/50';
     score = 0;
    
 }

// Affichage du rang en étoiles 



bouton.addEventListener('click',Score);

