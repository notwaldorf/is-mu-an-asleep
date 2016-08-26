var moment = require('moment-timezone');
var ipc = require('electron').ipcRenderer

ipc.on('show', function (event, message) {
  doItGetTheTimeDoItNow();
})

function doItGetTheTimeDoItNow() {
  var now = moment().tz("Asia/Taipei");

  // Awake at 9:00 am.
  var awake = moment().tz("Asia/Taipei");
  awake.hours(9).minutes(0).seconds(0);

  // Asleep at 11:00 pm.
  var asleep = moment().tz("Asia/Taipei");
  asleep.hours(-23).minutes(0).seconds(0);  // maybe? I don't understand time.

  var isAsleep = now.isBefore(awake) && now.isAfter(asleep)? 'yes' : 'no';

  document.getElementById("time").innerHTML = now.format('hh:mm a');
  document.getElementById("answer").innerHTML = isAsleep;
}
