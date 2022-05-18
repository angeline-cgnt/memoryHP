const arrayImg = ['poufsouffle', 'serpentard', 'gryffondor', 'butterbeer', 'cauldron', 'serdaigle', 'jellybean', 'chocofrog'];

let newTab = arrayImg.concat(arrayImg);

function randomImg(list) {
    return Math.floor(Math.random() * list.length);
}

let nbElement = newTab.length;

function restart(myArray) {
    let tab = myArray.slice();
    document.getElementById('cards').innerHTML = '';
    for (i = 0; i < nbElement; i++) {
        let imgId = randomImg(tab);
        let temp = tab[imgId];
        document.getElementById('cards').innerHTML += `<div class="cardMemoFront" id="front${i}" data-img="${temp}">
          <img class="imgMemo" src="assets/img/${temp}.png" alt="">
          </div>
          <div class="cardMemoBack" id="back${i}" data-img="${temp}" onclick="returnCard(${i})"></div>`;
        tab.splice(imgId, 1);
    }
}

document.getElementById('newPlay').onclick = () => restart(newTab);

let cardReturned = 0;
let arrayCardReturned = [];
let arrayFind = [];

function returnCard(id){
    if(cardReturned < 2){
        document.getElementById(`front${id}`).style.display = "block";
        document.getElementById(`back${id}`).style.display = "none";
        cardReturned++;
        arrayCardReturned.push(id);    
    } 
    // console.log(arrayCardReturned);
    // console.log(cardReturned);
    
    if(cardReturned == 2){
        if(document.getElementById('front' + arrayCardReturned[0]).getAttribute('data-img') == document.getElementById('front' + arrayCardReturned[1]).getAttribute('data-img')){
            arrayFind.push(arrayCardReturned[0]);
            arrayFind.push(arrayCardReturned[1]);
            cardReturned = 0;
        } else {
        arrayCardReturned.forEach(id =>
            setTimeout(`hideCard(${id})`, 1000)
        ); 
        }
    arrayCardReturned = [];
    if(arrayFind.length == 16){
       window.alert('Victoire');
       arrayFind = [];
    }
    }
}


function hideCard(id){
    document.getElementById(`front${id}`).style.display = "none";
    document.getElementById(`back${id}`).style.display = "block";
    cardReturned = 0;
}