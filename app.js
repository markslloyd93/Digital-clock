/* ES6 javascript version */

/*
Replace html span tags with the values held in hours, mins & secs varibales.
1. Grab each span ID using the getElementById method.
2. Change the value of that span tag with each variable.
3. wrap the 3 elements inside a function.
 */
function clock() {
  /* Variables */
  /*
  If you want to change a value of a variable use var instead of const.
  you can't change a const value because its constent
  */
  const fullDate = new Date();
  var hours = fullDate.getHours();
  var mins = fullDate.getMinutes();
  var secs = fullDate.getSeconds();

  //if statement to add a '0' if hour/minute value is less than 10
  if(hours < 10) {
    hours = "0" + hours;
  } else if (mins < 10){
    mins = "0" + mins;
  } else if (secs < 10){
    secs = "0" + secs;
  }

  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = ":" + mins;
  document.getElementById('second').innerHTML = ":" + secs;
}
/*
Use JS built in function setInterval to auto update the time without
refreshing the browser
*/
setInterval(clock, 100);
