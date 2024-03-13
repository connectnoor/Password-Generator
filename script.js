let passwordBox = document.getElementById('password');
let generateBtn = document.getElementById('generate-btn');
let lengthInput = document.getElementById('lengthInput');
let copyBtn = document.getElementById('copy');


const chars = "ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqvurstwxyz1234567890!@#$%^&*()_+?/{}[";
    function generatePassword(){
        let lengthOfpassword = Number(lengthInput.value)
        let password = "";
        for (let i =0; i < lengthOfpassword ; i++){
            let randomNumber = Math.floor(Math.random() * chars.length) 
            password += chars[randomNumber]
        }
        passwordBox.value = password;
        console.log(password)
        
    }
    generateBtn.addEventListener('click', generatePassword)
   
    copyBtn.addEventListener('click', copyPasswordToClipboard)

    
    generatePassword()

    function copyPasswordToClipboard() {
        passwordBox.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    }