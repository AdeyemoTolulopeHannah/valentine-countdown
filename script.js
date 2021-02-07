var countDownDate = new Date("FEB 14, 2021 00:00:00").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.querySelector(".day").innerHTML = 
  days;
  document.querySelector(".hours").innerHTML = 
  hours;
  document.querySelector(".minutes").innerHTML = 
  minutes;
  document.querySelector(".seconds").innerHTML = 
  seconds;
  


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("displayDate").innerHTML = "Happy Valentine, Share Love";
  }
});