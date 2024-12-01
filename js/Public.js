document.addEventListener('DOMContentLoaded',function(){
    if(document.cookie.indexOf('loggedIn=true') !== -1) {
        document.getElementById('login').innerHTML = 'Logout';
        document.getElementById('login').href = './Logout.html';
    }
});