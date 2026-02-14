const buttons=document.querySelectorAll(".buttons");
let yourScore=document.querySelector(".your-score");
let opponentScore=document.querySelector(".opponent-score");
let yourChoice=document.querySelector(".your-choice");
let opponentChoice=document.querySelector(".opponent-choice");
let result=document.querySelector(".result");
let reset=document.querySelector(".reset");
let you;
let opponent;
let userScore=0;
let oppScore=0;

let random=()=>{
   let threeShot=["scissor","paper","stone"]
   let choice=threeShot[Math.floor(Math.random() * 3)]
  return choice;
}


buttons.forEach((b)=>{
   b.addEventListener("click",(e)=>{
    you=e.target.dataset.choice;
    yourChoice.innerHTML=you;
    opponent=random();
    opponentChoice.innerHTML=opponent;

    if(you == opponent){
      result.innerHTML="Match Draw";
      return;
    }    
     
    if(
      (you == "scissor" && opponent =="paper") ||
      (you == "paper" && opponent == "stone" ) ||
      (you =="stone" && opponent =="scissor")  ){
        result.innerHTML ="You Win"
        userScore++;
        yourScore.innerHTML=userScore;
    }else{
      result.innerHTML="You Lose"
      oppScore++;
      opponentScore.innerHTML=oppScore;
    }
   })
})

reset.addEventListener("click",()=>{
   yourChoice.innerHTML="";
   yourScore.innerHTML="";
   opponentChoice.innerHTML="";
   opponentScore.innerHTML="";
   result.innerHTML="Let's Play Again";
   oppScore=0;
   userScore=0;
})