const dateOfday = new Date()
const day = dateOfday.getDay()
const year = dateOfday.getFullYear()
const month = dateOfday.getMonth();
const hoursDay = dateOfday.getHours();
const minutesDay = dateOfday.getMinutes();
const secondesDay = dateOfday.getSeconds()

const weekday = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
const months = ["Jan", "Feb","Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const displayHours = () => {
    const hoursOfToday = hoursDay + ": " + minutesDay + ": " + secondesDay;

    document.querySelector(".hours").innerHTML = hoursOfToday;
    document.querySelector(".year").innerHTML = year;
    document.querySelector(".day").innerHTML = weekday[dateOfday.getDay()];
    document.querySelector(".pday").innerHTML = day;
    document.querySelector(".month").innerHTML = months[dateOfday.getMonth()];
}

setInterval(displayHours, 1000)

//const hoursOfToday = hoursDay + ": " + minutesDay + ": " + secondesDay;