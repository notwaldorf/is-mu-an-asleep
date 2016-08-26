var moment = require('moment-timezone');
var ipc = require('electron').ipcRenderer;

ipc.on('show', function (event, message) {
  doItGetTheTimeDoItNow();
})

var minutesOfDay = function(m) {
  return m.minutes() + m.hours() * 60;
}

function doItGetTheTimeDoItNow() {
  var now = moment().tz('Asia/Taipei');
  var time = minutesOfDay(now);

  // Awake at 9:00 am.
  var awake = 9 * 60;

  // Asleep at 11:00 pm.
  var asleep = 23 * 60;

  var isAsleep = time < awake || time > asleep;

  document.body.className = isAsleep ? 'dark' : 'light';
  document.getElementById('time').innerText = now.format('hh:mm a');
  document.getElementById('emoji').innerText =  isAsleep ? '😴' : '🎉';
  document.getElementById('answer').innerText = isAsleep ? 'YES' : 'NO';
}
