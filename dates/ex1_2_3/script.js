////Exercise 1
////Find the timezones of :
///Anchorage (USA)
///Reykjavik (Iceland)
///Saint-Petersburg (Russia)
///And display the date and time of these cities along with the time and date of Brussels.


const date = new Date();
const anchorage = date.toLocaleString('en-US', { timeZone: 'America/Anchorage' })
const bruxelles = new Date()
const saintPetersburg = date.toLocaleString('RU', {timeZone : 'Europe/Moscow'} )
const reykjavik = date.toLocaleString ("Is", {timeZone: 'Atlantic/Reykjavik'})

const p1 = document.querySelector(".date1").innerHTML = "Bruxelles: " + bruxelles;
const p2 = document.querySelector(".date2").innerHTML = "Anchorage, USA: " + anchorage;
const p3 = document.querySelector(".date3").innerHTML = " Saint Petersburg, Russia: " + saintPetersburg;
const p4 = document.querySelector(".date4").innerHTML = "Reykjavik: " + reykjavik; 


///Exercise 2
///Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?
///Write a function to find how many days have passed since any point in time (after 1970).

const oneDay = 86400000; // hours*minutes*seconds*milliseconds
const birthDate = new Date(1989,01,21);
let todayDate = new Date();
const daysSinceBirth = Math.round(Math.abs((birthDate.getTime() - todayDate.getTime())/(oneDay)));
console.log(daysSinceBirth + " days has passed since your birth");


//Exercise 3
//Using timestamps, find the exact time and date we will be in 80000 hours.
//Write a function to display the time and date for any amount of hours given in the future. 
//Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.

const findDate= (heure)=> {

    var d = heure /24;
    var h = heure - (d * 24);
    
    
    const tomorrow = new Date();
    
    tomorrow.setDate(new Date().getDate() + d);
    console.log(tomorrow);
    
    
    
    
    };

    findDate(80000);