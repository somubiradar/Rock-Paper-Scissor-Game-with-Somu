let userscore=0;
let computerscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");



const gencomputerchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];

} 
 const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game was Draw.Play again";
    msg.style.backgroundColor = "#081b31";
 }

 const showwinner = (userwin,userchoice,computerchoice) =>{
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("Somu win");
        msg.innerText = `Somu win! your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerscore++;
        computerscorepara.innerText = computerscore;
        console.log("Somu lose");
        msg.innerText = `Somu lose. ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
 };

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    //////generate computere choice
    const computerechoice = gencomputerchoice();
    console.log("computer choice = ", computerechoice);
    if(userchoice === computerechoice) {
        //draw game
        drawGame();
    }else {
        let userwin = true;
        if(userchoice ==="rock") {
            //scissors,paper
            userwin = computerechoice === "paper"?false:true;
        } else if(userchoice ==="paper") {
            ///rock,scessior
            userwin = computerechoice === "scissors"? false:true;
        } else{
            //rock,paper
            userwin =computerechoice ==="rock"?false:true;
        }
        showwinner(userwin,userchoice,computerechoice)
    }

};

choices.forEach((choice) => {
 choice.addEventListener("click",() =>{
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
 });

});
