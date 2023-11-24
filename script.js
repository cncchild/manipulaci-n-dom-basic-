const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#Resultado');


//btn.addEventListener('click', btnOnClick);
form.addEventListener('submit', sumarInputValues);

//function btnOnClick(){
function sumarInputValues(event) {
   // console.log({event});
    event.preventDefault();
  //  console.log('escuchando el evento de click');
 // console.log(input1.value + input2.value);
 const sumaInputs = input1.value + input2.value;
 pResultado.innerText = "Resultado: " + sumaInputs;
}

//const p = document.querySelectorAll('p');
//const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
//const input = document.querySelector('input');

//console.log(input.value)

//console.log({
//    h1,
//    p,
//    parrafito,
//    pid,
//    input,
//});

 //h1.innerHTML = 'Patito <br> amarillo';
 //h1.innerText = 'Patito <br> amarillo';

 //console.log(h1.getAttribute('pantalla'));
 //en la etiqueta html pantalla = platzilg

 //console.log(h1.getAttribute('class'));
 //h1.setAttribute('class', 'rojo');

 //h1.classList.add('rojo');

 //h1.classList.remove('verde');

 //h1.classList.toggle('verde');
 //h1.classList.contains('verde');
 
 //input.value = "456";

//console.log(document.createElement('img'));

const img = document.createElement('img');
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vZbWC2QSAknYKdJDAHFcvp4pqWwjZokXuOG90PtC_PMPs1oCnzZdvZ-f9F2XfAyG-dg&usqp=CAU');
console.log(img);
pid.innerHTML = "";
pid.append(img);

