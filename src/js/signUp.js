const inputs = document.querySelectorAll('input');
const SignUpForm = document.getElementById('SignUpForm');

SignUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((inp)=>{
        console.log(inp.value);
    })
})