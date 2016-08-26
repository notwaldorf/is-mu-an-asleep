var moment = require('moment-timezone');
var ipc = require('electron').ipcRenderer;

ipc.on('show', function (event, message) {
  doItGetTheTimeDoItNow();
})

var minutesOfDay = function(m) {
  return m.minutes() + m.hours() * 60;
}

function doItGetTheTimeDoItNow() {
  var now = minutesOfDay(moment().tz("Asia/Taipei"));

  // Awake at 9:00 am.
  var awake = 9 * 60;

  // Asleep at 11:00 pm.
  var asleep = 23 * 60;

  var isAsleep = now < awake || now > asleep ? 'YES' : 'NO';

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
