const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const SpecialChars = ['%','*','/', '-', '+', '='];
let Output=''


const calculate = (btnvalue) => {
    if (btnvalue === '=' && Output !== '') {
        Output = eval(Output.replace("%", "/100"));
    }else if (btnvalue === 'AC') {
        Output = '';
}else if (btnvalue === 'DEL') {
    Output = Output.toString().slice(0, -1);
}else {
    if (Output === '' && SpecialChars.includes(btnvalue)) return;
    Output += btnvalue;
}
    display.value = Output;
}



buttons.forEach((button)=>{
    button.addEventListener('click', (event) => calculate(event.target.dataset.value));

});
