let boxColor = document.querySelector('.box');
boxColor.addEventListener("mouseover", () => {
    boxColor.setAttribute("style", "background-color:blue;");
  });
  boxColor.addEventListener("mouseout", () => {
    boxColor.setAttribute("style", "background-color:red;");
    
  });