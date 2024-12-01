document.addEventListener('DOMContentLoaded', function() {
    if(document.cookie.indexOf('loggedIn=true') !== -1) {
        document.getElementById('login').innerHTML = 'Logout';
        document.getElementById('login').href = './Pages/Logout.html';
    }
    const email = document.cookie.split('; ').find(row => row.startsWith('email=')).split('=')[1];
        
    let users = JSON.parse(localStorage.getItem('users'));
    let user = users.find(user => user.email === email);
if(user.cart)
for(let id = 1; id <= 8; id++) {
    if(id<=user.cart.length){
    if (user.cart[id]>=0) {
    const items = document.getElementsByClassName("item");        
    const item = items[id - 1];
    const countElement = item.getElementsByTagName("h4")[0];        
    countElement.innerHTML = "Count : " + user.cart[id];
    }
}
    else
        break;
    }
});
if(document.cookie.indexOf('loggedIn=true') === -1) {
    document.getElementById("Landing").innerHTML="";
    document.getElementById("LoginFirst").innerHTML="You must login first";
}
function addToCart(id) {
    const email = document.cookie.split('; ').find(row => row.startsWith('email=')).split('=')[1];

    let users = JSON.parse(localStorage.getItem('users'));
    let user = users.find(user => user.email === email);

    if (!user.cart) {
        user.cart = {};
        user.cartimg = {};
        user.cartPrice = {};
        user.cartitem={};
    }

    if (!user.cart[id]) {
        user.cart[id] = 0;
    }
    user.cart[id]++;

    const items = document.getElementsByClassName("item");
    const item = items[id - 1];
    const countElement = item.getElementsByTagName("h4")[0];
    const priceElement = item.getElementsByTagName("p")[0];
    const imgElement = item.getElementsByTagName("img")[0];
    const nameElement = item.getElementsByTagName("h3")[0];
    const price = priceElement.innerHTML.split(": $")[1];
    const imgName = imgElement.src.split('/').pop();

    user.cartPrice[id] = price;
    user.cartimg[id] = imgName;
    user.cartitem[id] = nameElement.innerHTML;
    localStorage.setItem('users', JSON.stringify(users));
    countElement.innerHTML = "Count : " + user.cart[id];
}