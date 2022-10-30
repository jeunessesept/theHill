const inputedName = document.getElementById("name");
const inputContainer = document.querySelector(".container");
const selectCountry = document.getElementById("countries");

const button = document.querySelector(".api");

const fetchApi = () => {
  const country_id = document.getElementById("countries").value;

  button.addEventListener("click", () => {
    const fetchName = (name, country_id) =>
      fetch(`https://api.agify.io/?name=${name}&country_id=` + country_id);

    let inName = inputedName.value;
    let countryChoosed = selectCountry.value;

    fetchName(inName, countryChoosed)
      .then((response) => response.json())
      .then((json) => {
        if (inName != "") {
          let inputeded = document.createElement("div");
          inputeded.innerHTML = inName + " is " + json.age + " years old";
          inputContainer.append(inputeded);
          
        }
      })
      .catch((error) => {
        console.log("There was an error!", error);
      });
  });
};

fetchApi();
