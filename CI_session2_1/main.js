let result = document.forms[0];
let number = document.getElementById("input_num");
let submit = document.getElementById("submit");
let output = "";
submit.addEventListener('click',() =>{
    if (number.value >= 4 && number.value <= 20) {
        for ( let i = 0; i < number.value; i++) {
            if (i % 2 == 0) {
                output += i + " "
            }
        }
    } else {
        alert("Chỉ nhập từ 4 đến 20")
    }
    result.innerHTML = `Kết quả là: ${output}`
});


