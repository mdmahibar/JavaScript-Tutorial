//Calculator
let str = '';
let buttons = document.querySelectorAll('button');
let display = document.getElementById('display');

const arr = [...buttons];

arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        if(value == '='){
            try {
                str = eval(str);
                display.innerHTML = str;
            } catch (error) {
                alert('Put a Valid Expression!!');
            }
        }
        else if(value == 'C' || value=='del') {
            str = '0';
            display.innerHTML = str;
        }
        else {
            if(str == '0'){
                str = '';
            }
            str+= value;
            display.innerHTML = str;
        }
    })
})