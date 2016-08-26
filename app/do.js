var moment = require('moment-timezone');
var ipc = require('electron').ipcRenderer;

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

  var isAsleep = now.isBefore(awake) && now.isAfter(asleep)? 'YES' : 'NO';

  document.body.className = isAsleep ? 'dark' : 'light';
  var timeString;
  if (isAsleep) {
    timeString = '🌙' + now.format('hh:mm a') + '😴';
  } else {
    timeString = '☀️' + now.format('hh:mm a') + '🎉';
  }

  document.getElementById("time").innerHTML = timeString;
  document.getElementById("answer").innerHTML = isAsleep;
}
