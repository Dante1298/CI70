import {add, sub, mul, div} from "./base.js";
 let result = document.forms[0];
 let number1 = document.getElementById("input_number1");
 let number2 = document.getElementById("input_number2");
 let btnAdd = document.getElementById("addition");
 let btnSub = document.getElementById("subtraction");
 let btnMul = document.getElementById("multiplication");
 let btnDiv = document.getElementById("division");
 let output = 0;
 number1.addEventListener("keyup", () => {
     if (isNaN(number1.value)) {
         alert("Vui lòng nhập số vào đây nhé!");
         return false;
     }
     if (number1.value == '') {
        result.innerHTML = "Bạn chưa nhập giá trị"
     }
 });

 number1.addEventListener("keyup", () => {
    if (isNaN(number2.value)) {
        alert("Vui lòng nhập số vào đây nhé!");
        
    }
    if (number2.value == '') {
        result.innerHTML = "Bạn chưa nhập giá trị"
    }
});
 btnAdd.addEventListener("click", () => {
     if (number1.value == '' || number2.value == '') {
         result.innerHTML = "Không thực hiện được phép tính!!!";
         
     }
     output = add(parseFloat(number1.value), parseFloat(number2.value));
     result.innerHTML = `Kết quả phép toán: ${output}`;
 });
 btnSub.addEventListener("click", () => {
    if (number1.value == '' || number2.value == '') {
        result.innerHTML = "Không thực hiện được phép tính!!!";
        
    }
    output = sub(parseFloat(number1.value), parseFloat(number2.value));
    result.innerHTML = `Kết quả phép toán: ${output}`;
});
btnMul.addEventListener("click", () => {
    if (number1.value == '' || number2.value == '') {
        result.innerHTML = "Không thực hiện được phép tính!!!";
        
    }
    output = mul(parseFloat(number1.value), parseFloat(number2.value));
    result.innerHTML = `Kết quả phép toán: ${output}`;
});
btnDiv.addEventListener("click", () => {
    if (number1.value == '' || number2.value == '') {
        result.innerHTML = "Không thực hiện được phép tính!!!";
        return false;
    }
    output = div(parseFloat(number1.value), parseFloat(number2.value));
    result.innerHTML = `Kết quả phép toán: ${output.toFixed(5)}`;
});
