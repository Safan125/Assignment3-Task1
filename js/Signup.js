document.getElementById('SignupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const fnm=document.getElementById('fnm').value;
    const lnm=document.getElementById('lnm').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let found = users.filter(function(user) {
        return user.email === email;
    });
    if(found.length > 0) {
        alert('Email already exists!');
        return;
    }
    users.push({email, password,fnm,lnm});
    localStorage.setItem('users', JSON.stringify(users));
    document.cookie = 'loggedIn=true; expires=0; path=/';
    document.cookie = 'email='+email+'; expires=0; path=/';
    document.cookie = 'name='+fnm+' '+lnm+'; expires=0; path=/'
    alert('Signup successful!');
    window.location.pathname = '/pages/Logout.html';
});