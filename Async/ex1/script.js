const button = document.querySelector(".becode");

button.addEventListener("click", () => {
  fetch("./becode.json")
    .then((response) => response.json())
    .then((text) => {
      const list = document.createElement("ul");
      f = document.querySelector(".fetch");
      button.style.display = "none";


      f.appendChild(list);

    for(let i = 0; i < text.length; i++){
        elementlist=document.createElement("li"); 
        elementlist.textContent = text[i];
        list.append(elementlist);
    }
    });
});



    //   f.appendChild(list);

    //   texto.forEach((element), () => {
    //     document.createElement("li");
    //     elementlist = document.createElement("li");
    //     elementlist.textContent = element;

    //     list.appendChild(elementlist);
    //   });
    // });




