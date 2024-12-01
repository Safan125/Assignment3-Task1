document.getElementById('LoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let fnm,lnm;
    let found = users.filter(function(user) {
        fnm=user.fnm;
        lnm=user.lnm;
        return user.email === email && user.password === password;
    });
    if(found.length === 0) {
        alert('Invalid email or password!');
        document.cookie = 'loggedIn=false; path=/';
        document.cookie = 'email=; path=/';
        document.cookie = 'name=; path=/';
        return;
    }
    alert('Login successful!');
    document.cookie = 'loggedIn=true; expires=0; path=/';
    document.cookie = 'email='+email+'; expires=0; path=/';
    document.cookie = 'name='+fnm+' '+lnm+'; expires=0; path=/'
    window.location.pathname = '/pages/Logout.html';
});