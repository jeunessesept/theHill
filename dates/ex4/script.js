const displayHours = () => {
  const dateOfday = new Date();
  let day = dateOfday.getDay();
  let year = dateOfday.getFullYear();
  let month = dateOfday.getMonth();
  let hoursDay = dateOfday.getHours();
  let minutesDay = dateOfday.getMinutes();
  let secondesDay = dateOfday.getSeconds();

  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let hoursOfToday = hoursDay + ": " + minutesDay + ": " + secondesDay;



  document.getElementById("hours").innerHTML = hoursOfToday;
  document.querySelector(".year").innerHTML = year;
  document.querySelector(".day").innerHTML = weekday[dateOfday.getDay()];
  document.querySelector(".pday").innerHTML = day;
  document.querySelector(".month").innerHTML = months[dateOfday.getMonth()];

};

setInterval(displayHours, 1000);
