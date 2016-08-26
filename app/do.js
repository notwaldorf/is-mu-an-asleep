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
  var minutes = minutesOfDay(now);

  // Awake at 9:00 am.
  var awake = 9 * 60;

  // Asleep at 11:00 pm.
  var asleep = 23 * 60;

  var isAsleep = minutes < awake || minutes > asleep;
  document.body.className = isAsleep ? 'dark' : 'light';
  document.getElementById('time').innerText = now.format('hh:mm a');
  document.getElementById('emoji').innerText =  isAsleep ? '😴' : '🎉';
  document.getElementById('answer').innerHTML = isAsleep ? 'YES' : 'NO';
}
