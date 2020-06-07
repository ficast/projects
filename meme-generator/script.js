let textInput = document.querySelector("#text-input");
let textMeme = document.querySelector("#meme-text");
let memeImg = document.querySelector("#meme-image");
let memeInsert = document.querySelector("#meme-insert");
let container = document.querySelector('#meme-image-container');

memeInsert.addEventListener("change", function () {
  memeImg.src = URL.createObjectURL(this.files[0]);
});

function openImage(jpeg) {
memeImg.src = jpeg;
}

textInput.addEventListener("keyup", function () {
  textMeme.innerText = textInput.value;
});

let button1 = document.querySelector('#button1');
button1.style.border = "3px dashed red";

button1.addEventListener('click', function(e) {
  e.preventDefault();
  container.style.border = button1.style.border;
});

let button2 = document.querySelector('#button2');
button2.style.border = "5px double blue";

button2.addEventListener('click', function(e) {
  e.preventDefault();
  container.style.border = button2.style.border;
});

let button3 = document.querySelector('#button3');
button3.style.border = "6px groove green";

button3.addEventListener('click', function(e) {
  e.preventDefault();
  container.style.border = button3.style.border;
});
