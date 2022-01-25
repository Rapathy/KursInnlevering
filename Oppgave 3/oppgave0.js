// Oppgave 1

let btn = document.querySelector('#remove-btn');

btn.addEventListener('click', () =>{
  document.querySelector('#remove').style.display = "none";
});

// Oppgave 2

let btn1 = document.querySelector('#change-btn');

btn1.addEventListener('click', () =>{
  const changeText = document.querySelector("#change");
  changeText.innerHTML = "Fullført oppgave"
  });


//  Oppgave 3

const inputText = document.getElementById('input-text');
const input = document.getElementById('input');

const removeText = () => {
  inputText.innerHTML = null;
};

removeText();

const update = (event) => {
  let letter = event.key;
  inputText.innerHTML += letter;
};

input.addEventListener('keyup', update);



// Oppgave 4

const myList = ["item one", "item two", "item three"];

let btn2 = document.querySelector('#write-list');

btn2.addEventListener('click', () =>{
  document.querySelector('#ul').textContent = myList.join(', ');
  });


// Oppgave 5

const text = document.querySelector('#text');
const createBtn = document.querySelector('#create');
const select = document.querySelector('#select');
const htmlPlaceHolder = document.querySelector('#placeholder');

const createElement = () => {
  const htmlEl = select.value;
  const message = text.value;
  htmlPlaceHolder.innerHTML += `<${htmlEl}>${message}</${htmlEl}>`;
};

createBtn.addEventListener('click', createElement);



// Oppgave 6

let btn3 = document.querySelector('#remove-li');

const removeList = () => {
  let list = document.querySelectorAll('#list li');
           for(var i= 0; li=list[0]; i++) {
            li.parentNode.removeChild(li);
         }
  }

btn3.addEventListener('click', () =>{
  removeList()
  });



// Oppgave 7

let btn4 = document.querySelector('#order');

btn4.addEventListener('click', () =>{
  let input = document.querySelector('#name').value;

  let count = input.length;

  if(count > 4 ){
    document.querySelector('#order').disabled = true;
  }
  });


// Oppgave 8

let btn5 = document.querySelector('#color');

function color(){
  let c = document.querySelector('.children').childNodes;
  c[1].style.color = "green";
  c[3].style.color = "pink";
  c[5].style.color = "green";
  c[7].style.color = "pink";
  c[9].style.color = "green";
  
  
}

btn5.addEventListener('click', () =>{
  color();

});

