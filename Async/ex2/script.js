const inputedName = document.getElementById("name");
const inputContainer = document.querySelector(".container");
const selectCountry = document.getElementById("countries");



const button = document.querySelector(".api");

const fetchApi = () => {
  button.addEventListener("click", () => {
    const fetchName = (name) =>
      fetch("https://api.agify.io/?name=" + name);

    inName = inputedName.value;

    fetchName(inName)
      .then((response) => response.json())
      .then((json) => {
        if (inName != "") {
          let inputeded = document.createElement("div");
          inputeded.innerHTML = inName + " is " + json.age + " years old";
          inputContainer.append(inputeded);
          console.log(json.count);
        }
      })
      .catch((error) => {
        console.log("There was an error!", error);
      });
  });
  
  selectCountry.addEventListener("change", () => {
    const fetchCountry = (country_id) => 
    fetchCountry("https://api.agify.io/?name=michael&country_id=" + country_id);

    let countryChoosed = selectCountry.value;

    fetchCountry(countryChoosed)
    .then((res) => res.json())
    .then (() => {
      if (countryChoosed.value === "Belgium") {
        country_id = "BE";
      } else if (countryChoosed.value === "France") {
        country_id = "FR";
      } else if (countryChoosed.value === "Italy") {
        country_id = "IT";
      }
    })
  })
};

fetchApi();

