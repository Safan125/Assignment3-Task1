document.addEventListener('DOMContentLoaded',toggle);

function toggle(){
    if(document.cookie.indexOf('loggedIn=true') !== -1) {
        document.getElementById('login').innerHTML = 'Logout';
        document.getElementById('login').href = './Logout.html';
    }
}