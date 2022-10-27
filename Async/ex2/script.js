const inputedName = document.getElementById("name");
const inputContainer = document.querySelector(".container");

const button = document.querySelector(".api");

const buttonFetchApi = () => {
  button.addEventListener("click", () => {
    const fetchName = (name) => fetch("https://api.agify.io/?name=" + name);

    fetchName(name)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.age);
        console.log(json.count);
      })
      .catch((error) => {
        console.log("There was an error!", error);
      });
    
    const inputeded = document.createElement("div");
    inputeded.textContent = inputedName.value;
    inputContainer.appendChild(inputeded);
  });
};

buttonFetchApi();
