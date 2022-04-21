let allTotal=0;

function addToCart(element){

let input=element.previousElementSibling; //input
let item=input.closest('class'); //actions
let product=element.closest('.single-item'); //ceo jedan proizvod sa nazivom cenom...
let quantity=parseInt(input.value);
let price=product.querySelector('p').innerText;
let name=product.querySelector('h3').innerText;
//console.log(name);
price=price.substring(1);
price=parseInt(price);

if(quantity>0){
let total=price*quantity;
element=element.setAttribute('disabled','true');

allTotal+=total;
let cart=document.querySelector('.cart');
cart.innerHTML+= `<div class="cart-single-item"><h3>${name}</h3> $${price} x ${quantity}=<span>${total}</span>

<button onclick="deleteItem(this)"> Obrisi</button>


</div>`;
let cartTotal=cart.querySelector('.total')
cartTotal.innerHTML=`$${allTotal}`;
}else{
    alert("Dodaj kolicinu!")
}
}

function deleteItem(element){
    let cart=document.querySelector('.cart');
let mybody=document.querySelector('.cart-single-item');
let price=mybody.querySelector('span').innerHTML;
let name=mybody.querySelector('h3').innerHTML;
price=parseInt(price);
allTotal-=price;

let cartTotal=cart.querySelector('.total');
cartTotal.innerHTML=`$${allTotal}`;
mybody.remove();



let phones=document.querySelectorAll('.single-item');
phones.forEach(function(phon){
    if(phon.querySelector('.si-content h3').innerHTML===name){
      phon.querySelector('.actions input').value=0;
      phon.querySelector('. actions button').removeAttribute('disabled');
    }
});
}