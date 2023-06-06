const counter1 = document.querySelector('#counterValue1');
const buttonDecrement1 = document.querySelector('#buttonDecrement1');
const buttonIncrement1 = document.querySelector('#buttonIncrement1');
const valorTotal = document.querySelector('#valorTotal');

let value1 = parseFloat(counter1.value.replace(/[^\d,.]/g, '').replace(',', '.'));
let totalValue = parseFloat(valorTotal.innerHTML.replace(/[^\d,.]/g, '').replace(',', '.'));

buttonIncrement1.addEventListener('click', () => {
  value1++;
  counter1.value = value1;
  totalValue += price1;
  valorTotal.innerHTML = `R$ ${totalValue.toFixed(2).replace('.', ',')}`;
});

buttonDecrement1.addEventListener('click', () => {
  value1 = value1 !== 0 ? --value1 : 0;
  counter1.value = value1;
  totalValue -= price1;
  valorTotal.innerHTML = `R$ ${totalValue.toFixed(2).replace('.', ',')}`;
});


const counter2 = document.querySelector('#counterValue2');
const buttonDecrement2 = document.querySelector('#buttonDecrement2');
const buttonIncrement2 = document.querySelector('#buttonIncrement2');

let value2 = parseInt(counter2.value);

buttonIncrement2.addEventListener('click', () => {
  value2++;
  counter2.value = value2;
  totalValue += price2;
  valorTotal.innerHTML = `R$ ${totalValue.toFixed(2).replace('.', ',')}`
})

buttonDecrement2.addEventListener('click', () => {
  value2 = value2 !== 0 ? --value2 : 0;
  counter2.value = value2;
  totalValue -= price2;
  valorTotal.innerHTML = `R$ ${totalValue.toFixed(2).replace('.', ',')}`
});

const counter3 = document.querySelector('#counterValue3');
const buttonDecrement3 = document.querySelector('#buttonDecrement3');
const buttonIncrement3 = document.querySelector('#buttonIncrement3');

let value3 = parseInt(counter3.value);

buttonIncrement3.addEventListener('click', () => {
  value3++;
  counter3.value = value3;
  totalValue += price3;
  valorTotal.innerHTML = `R$ ${totalValue.toFixed(2).replace('.', ',')}`
})
buttonDecrement3.addEventListener('click', () => {
  value3 = value3 !== 0 ? --value3 : 0;
  counter3.value = value2;
  totalValue -= price3;
  valorTotal.innerHTML = `R$ ${totalValue.toFixed(2).replace('.', ',')}`
});

const counter4 = document.querySelector('#counterValue4');
const buttonDecrement4 = document.querySelector('#buttonDecrement4');
const buttonIncrement4 = document.querySelector('#buttonIncrement4');

let value4 = parseInt(counter4.value);

buttonIncrement4.addEventListener('click',() =>{
  value4++;
  counter4.value = value4
  totalValue += price4
  valorTotal.innerHTML = `R$ ${totalValue.toFixed(2).replace('.',',')}` 
})
buttonDecrement4.addEventListener('click',()=>{
  value4 = value4 !== 0 ? --value4 : 0;
  counter4.value = value4
  totalValue -= price4;
  valorTotal.innerHTML = `R$ ${totalValue.toFixed(2).replace('.', ',')}`
})

const counter5 = document.querySelector('#counterValue5');
const buttonDecrement5 = document.querySelector('#buttonDecrement5');
const buttonIncrement5 = document.querySelector('#buttonIncrement5');

let value5 = parseInt(counter5.value);
buttonIncrement5.addEventListener('click', () =>{
value5++;
counter5.value = value5
totalValue += price5;
valorTotal.innerHTML = `R$ ${totalValue.toFixed(2).replace('.', ',')}`
})

buttonDecrement5.addEventListener('click', () =>{
value5 = value5 !== 0 ? --value5 : 0;
counter5.value = value5
totalValue -= price5;
valorTotal.innerHTML = `R$ ${totalValue.toFixed(2).replace('.',',')}`
})

const btnAdicionarCupom = document.querySelector('#btn');
const inputCupom = document.querySelector('#cupom');

btnAdicionarCupom.addEventListener('click',() => {
  inputCupom.style.display = 'block';
});

function aplicarDescontoCupom(cupom, total) {
  let novoTotal = total;
  let desconto = 0; // Declare a variável desconto

  if (cupom === 'CUPOM1') {
    desconto = 1000; // Atribua o valor do desconto
    novoTotal -= desconto;
  } else if (cupom === 'CUPOM2') {
    const percentualDesconto = 50;
    desconto = (percentualDesconto / 100) * total; // Calcule o valor do desconto
    novoTotal -= desconto;
  }

  const mensagemDesconto = document.querySelector('#mensagemDesconto');
  mensagemDesconto.innerHTML = `Esse cupom de desconto corresponde a ${desconto.toFixed()}$ de reais!`;

  return novoTotal;
}

 inputCupom.addEventListener('change', () =>{
  const cupom =  inputCupom.value;
  const novoTotal = aplicarDescontoCupom(cupom,total);

  valorTotal.innerHTML = `R$ ${novoTotal.toFixed(2).replace('.', ',')}`
});



var price1 = 8599.90
var price2 = 959.90
var price3 = 1002.00
var price4 = 500.99
var price5 = 759.00
var total = price1 + price2 + price3 + price4 + price5

var desconto = price1 - price2 - price3 - price4 - price5 

document.getElementById("valorTotal").innerHTML = "R$ "+ total.toFixed(2)