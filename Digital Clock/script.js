let currentTime = new Date();

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];



let nameOfDay = day[currentTime.getDay()];

setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() <10 ? "0" : "") +  currentTime.getSeconds();
    
    
}, 1000)

 document.querySelector(".day").innerHTML = nameOfDay;

console.log(nameOfDay);
console.log(currentTime.getDay());
