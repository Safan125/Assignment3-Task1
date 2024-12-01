if(document.cookie.indexOf('loggedIn=true') === -1) {
    document.getElementById("Landing").innerHTML="";
    document.getElementById("LoginFirst").innerHTML="You must login first";
}
const email = document.cookie.split('; ').find(row => row.startsWith('email=')).split('=')[1];

let users = JSON.parse(localStorage.getItem('users'));
let user = users.find(user => user.email === email);
let have=false;
let totalPrice = 0;
if(user.cart)
for(let id = 1; id <= 8; id++) {
    if(id<=user.cart.length){
if (user.cart[id]>0) {
totalPrice += user.cart[id] * user.cartPrice[id];
have=true;
let item = document.createElement('div');
item.classList.add('item');
item.innerHTML = `
    <img src="../images/${user.cartimg[id]}" alt="item${id}">
    <h3>${user.cartitem[id]}</h3>
    <p>Price: $${user.cartPrice[id]}</p>
    <button onclick="removeFromCart(${id})">Remove from Cart</button>
    <button onclick="decrement(${id})">decrement</button>
    <h4>Count : ${user.cart[id]}</h4>
`;
document.getElementById('items').appendChild(item);
}
    }
    else
    break;
};
if(!have){
document.getElementById("LoginFirst").innerHTML="Your cart is empty";
}
else{
let price = document.createElement('div');
price.innerHTML = `
<h3>Total Price: $${totalPrice}</h3>
`;
document.getElementById("Landing").appendChild(price);
}
function removeFromCart(id) {
user.cart[id] = 0;
localStorage.setItem('users', JSON.stringify(users));
location.reload();
}
function decrement(id) {
if(user.cart[id] > 0){
user.cart[id]--;
localStorage.setItem('users', JSON.stringify(users));
location.reload();
}
}