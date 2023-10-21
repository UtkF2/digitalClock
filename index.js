setInterval(() => {
  var newdate = new Date();
  var newhr = newdate.getHours();
  var mm = newhr < 12 ? "AM" : "PM";
  newhr = newhr > 12 ? newhr - 12 : newhr;
  var newmin = newdate.getMinutes();
  var newsec = newdate.getSeconds();
  var col = ["red", "blue", "green"];
  document.getElementById("time").style.color = col[newsec % 3];
  document.getElementById("time").style.backgroundColor = "aqua";
  document.getElementById("time").style.textAlign = "center";

  document.getElementById(
    "time"
  ).innerHTML = `${newhr} : ${newmin} : ${newsec} ${mm}`;
}, 1000);
