let container = document.querySelector(".container");
window.onload = () => {
    let output = "";
    for (let i = 0; i < 5; i++) {
      output += 1;
      let num = document.createElement("p");
      num.innerHTML += output;
      container.appendChild(num);
    }
  };