let maxsound = new Audio('assets/maxsound.m4a');
let ethansound = new Audio('assets/ethansound.m4a');
let nabilsound = new Audio('assets/nabilsound.m4a');

window.addEventListener('keydown', (e) => {
  console.log(e);


});
document.onkeydown = Spacekey;
function Spacekey(e) {
  e = e || window.event;

  if (e.keyCode == '32') {
    test();
  }
}
AIDII = 0;
function test() {
  if (AIDII == 0) {
    document.getElementById(1).src = "assets/sujet noir.png";
    document.getElementById(2).src = "assets/nabil.png";
    document.getElementById(6).innerHTML = "Nabilator";
    document.getElementById(6).style.color = 'rgb(98,52,18)';
    nabilsound.play();
    AIDII = 1;
  } else if (AIDII == 1) {
    document.getElementById(1).src = "assets/Sujet rouge.png";
    document.getElementById(2).src = "assets/ethan.png";
    document.getElementById(6).innerHTML = "Ethnigator";
    document.getElementById(6).style.color = 'rgb(255, 1, 1)';
    ethansound.play();
    AIDII = 2;
  } else if (AIDII == 2) {
    document.getElementById(1).src = "assets/Sujet.png";
    document.getElementById(2).src = "assets/Max.png";
    document.getElementById(6).innerHTML = "Maxoumator";
    document.getElementById(6).style.color = 'rgb(57,255,20)';
    maxsound.play();
    AIDII = 0;
  }
}