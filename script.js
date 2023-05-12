game ={
 points: 0,
 pps: 0,
 pgen: [0,5],
 numOfpGens: 0,
 putil: [1000],
 numOfpUtils: 0
};

setInterval (function(){
game.points += game.pps/05;
document.getElementById("points").innerText = Math.floor(game.points);
document.getElementById("pps").innerText = Math.floor(game.pps);
if (game.numOfpGens < game.pgen.length){
	document.getElementById("pg1Cost").innerText = game.pgen[game.numOfpGens];
} else {
	document.getElementById("pg1Cost").innerText = "MAX";
}
if (game.numOfpUtils < game.putil.length){
	document.getElementById("pu1cost").innerText = game.putil[game.numOfpUtils];
}else{
	document.getElementById("pu1cost").innerText = "MAX";
}
document.getElementById("numOfPg1").innerText = game.numOfpGens;
document.getElementById("numOfPu1").innerText = game.numOfpUtils;
}, 50);



function buyPGen1(){
  if(game.points >= game.pgen[game.numOfpGens]){
    game.points -= game.pgen[game.numOfpGens];
    game.pps += 1;
    game.numOfpGens++;
  } else{
     document.getElementById("Upgrades").style.display="none";
document.getElementById("notEnough").style.display="block";
  }
}

function buyPUtl1(){
  if(game.points >= game.putil[game.numOfpUtils]){
    game.points -= game.putil[game.numOfpUtils];
    game.pps *= 1.05;
    game.numOfpUtils++;
  }else{
     document.getElementById("Upgrades").style.display="none";
document.getElementById("notEnough").style.display="block";
  }
}

function backToGame() {
document.getElementById("Upgrades").style.display="block";
document.getElementById("notEnough").style.display="none";

}

function tab(tab){
	document.getElementById("Upgrades").style.display = "none";
   document.getElementById("howTo").style.display = "none";
   document.getElementById("credits").style.display = "none";
	document.getElementById(tab).style.display = "block";
}

tab('Upgrades');
