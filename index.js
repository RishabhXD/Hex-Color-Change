let code = document.getElementById('code');
let container = document.getElementById('container');
const changeHex = () =>{
    let letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i <6;i++){
        let digit = letter[Math.floor(Math.random() * 16)];
        color += digit;
    }
    code.innerText = color;
    container.style.background = color;
}