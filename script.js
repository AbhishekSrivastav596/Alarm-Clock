setInterval(() => {
  let timefrompc = new Date();
  time.innerHTML = timefrompc.toLocaleTimeString();

}, 1000);

function setAlarm(){
  let h = hours.value;
  let m = minutes.value;
  setAlarmtime.innerHTML = h+":"+m+":00"
}
 
let checkInterval = setInterval(() => {
  let alarmtime = setAlarmtime.innerHTML;
  alarmtime = alarmtime.split(":");
  let alarmhours = alarmtime[0];
  let alarmminutes = alarmtime[1];
  let systemTime = new Date();
  let systemhours = systemTime.getHours();
  let systemminutes = systemTime.getMinutes();
  if(systemhours > 12 ){
    systemhours = systemhours - 12;
  }
  if(alarmhours==systemhours && alarmminutes==systemminutes){
    alarmSound.play();
    alert('Wake Up!')
  }

}, 1000);