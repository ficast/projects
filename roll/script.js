const dice = document.querySelector('.dice');
const diceArray = [ 2, 3, 4, 6, 8, 10, 12, 20, 100 ];
const button = document.querySelector('.button');
const divResult = document.querySelector('.result');
const result = document.querySelector('.result');

for (let i = 0; i < diceArray.length; i+=1) {
  dice.innerHTML += `<p class='option text' id='${(diceArray[i])}'>D${diceArray[i]}</p></div>`;
}

let none = function() {
  dice.style.display ='none';
}

let roll = function (num) {
  let result = Math.floor((Math.random() * num) + 1);
  none();
  return divResult.innerHTML = `<p>${result}</p>`;
}

dice.addEventListener('click', (e) => (roll(parseInt(e.target.id))));

result.addEventListener('click', function(e) {
  location.reload();
});