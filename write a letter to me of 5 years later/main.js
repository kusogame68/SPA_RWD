let btn = document.getElementById('btn');
let send = document.getElementById('email');
let mustmail = 'Must e-mail : n12170005@std.must.edu.tw';
let gmail = 'G-mail : kusogame68@gmail.com';
let emailVisible = false;

btn.addEventListener('click', function () {
    if (emailVisible) {
        send.innerHTML = '';
        this.innerText = 'About me';
        this.style.color = '';
    } else {
        send.innerHTML = `
            <div>${mustmail}</div>
            <div>${gmail}</div>
        `;
        this.innerText = 'Hide me';
        this.style.color = 'red'; 
    }
    emailVisible =! emailVisible;
});