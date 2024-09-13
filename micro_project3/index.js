let displaybox = document.getElementById("displaybox");
let btns = document.querySelectorAll("button");

function calculation(digit1, digit2, op) {
    let result = 0;
    if (op == "+") {
        result = Number(digit1) + Number(digit2);
    } else if (op == "-") {
        result = Number(digit1) - Number(digit2);
    } else if (op == "*") {
        result = Number(digit1) * Number(digit2);
    } else if (op == "/") {
        result = Number(digit1) / Number(digit2);
    }
    
    return result % 1 !== 0 ? result.toFixed(2) : result;
}

let ans = "";
let flag = true;
let digit1 = "";
let digit2 = "";
let op = "";

function calc(btn) {

    if(displaybox.innerText.length > 10){
        displaybox.classList.remove('text-5xl');
        displaybox.classList.add('text-xl');
    }
    else{
        displaybox.classList.remove('text-xl');
        displaybox.classList.add('text-5xl');
    }

    let str = btn.innerHTML;
    if(str == "RESET"){
        ans = "";
        str = "";
        displaybox.innerHTML = 0;
    }else if(str == 'DEL'){
        ans = ans.slice(0, -1);
        displaybox.innerHTML = ans;
        flag = true;
    }else if((str >= "0" && str <= "9") || str == ".") {
        ans += str;                         
        displaybox.innerHTML = ans;

        if(flag) {
            digit1 = ans;
        } else {
            digit2 += str;
        }
    }else if((str == "+" || str == "-" || str == "/" || str == "*") && flag) {
        op = str;
        ans += str;
        displaybox.innerHTML += str;
        flag = false;
    }else if(str == "=" && digit2 !== "") {
        ans = calculation(digit1, digit2, op);
        displaybox.innerHTML = ans;
        flag = true;
        digit1 = ans;
        digit2 = "";
    }

}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        calc(btn);
    });
});
