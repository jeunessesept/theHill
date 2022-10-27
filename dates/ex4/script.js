const displayHours = () => {
  const dateOfday = new Date();
  let day = dateOfday.getDate();
  let year = dateOfday.getFullYear();
  let month = dateOfday.getMonth();
  let hoursDay = dateOfday.getHours();
  let minutesDay = dateOfday.getMinutes();
  let secondesDay = dateOfday.getSeconds();
  

  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];



  hoursDay = hoursDay < 10 ? "0" + hoursDay : hoursDay;
  minutesDay = minutesDay < 10 ? "0" + minutesDay : minutesDay;
  secondesDay = secondesDay < 10 ? "0" + secondesDay : secondesDay;

  let hoursOfToday = hoursDay + ": " + minutesDay + ": " + secondesDay;

  document.getElementById("hours").innerHTML = hoursOfToday;
  document.querySelector(".year").innerHTML = year;
  document.querySelector(".day").innerHTML = weekday[dateOfday.getDay()];
  document.querySelector(".pday").innerHTML = day;
  document.querySelector(".month").innerHTML = months[dateOfday.getMonth()];
};

setInterval(displayHours, 1000);
