// downloading package
const prompt = require("prompt-sync")();
const Rows=3;
const Cols=3;
const SYMBOLS_COUNT ={
    A:2,
    B:4,
    C:6,
    D:8 

}
const SYMBOLS_VALUE={
    A:5,
    B:4,
    C:3,
    D:2

}





const deposit = ()=> {
    while(true){
        const depositAmount = prompt("Enter a deposit amount:");
        const numberDepositAmount=parseFloat(depositAmount);
        if (isNaN(numberDepositAmount)||numberDepositAmount<=0){
            console.log("Invalid deposite number,Please Try again..");
        }
            else{
            return numberDepositAmount;
            }


    }
    


};

const getNumberofLines=() =>{
    while(true){
        const lines = prompt("Enter the number of lines to bet on (1-3):");
        const numberoflines=parseFloat(lines);
        if (isNaN(numberoflines)||numberoflines<=0 ||numberoflines>3 ){
            console.log("Invalid number of lines,Please Try again..");
        }
            else{
            return numberoflines;
            }


    }
    
};
const getBet =(balance,lines)=>{
    while(true){
        const bet = prompt("Enter the bet per line:");
        const numberBet=parseFloat(bet);
        if (isNaN(numberBet)||numberBet<=0 ||numberBet>balance/lines ){
            console.log("Invalid bet number,Please Try again..");
        }
            else{
            return numberBet;
            }


    }
    

};

const spin =()=>{
    const symbols=[];
    for(const[symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for(let i=0;i<count;i++){
            symbols.push(symbol)

        }

    }
   const reels=[];
   for(let i=0;i<Cols;i++){
        reels.push([]);
        const reelSymbol=[...symbols];
        for(let j=0;j<Rows;j++){
            const randomIndex=Math.floor(Math.random()*reelSymbol.length);
            const selectedSymbol=reelSymbol[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbol.splice(randomIndex,1);


    }
   }
   return reels; 
};
const transpose =()=>{

};

let balance= deposit();
const numberLines=getNumberofLines();
const numberBet=getBet(balance,numberLines);
const reels=spin();
