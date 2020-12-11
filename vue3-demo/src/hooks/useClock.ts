import {ref} from 'vue'
const clock = ref('00:00:00');
const updateClock = () => {
  const nowTime = new Date();
  const hour = String(nowTime.getHours()).padStart(2,'0');
  const min = String(nowTime.getMinutes()).padStart(2,'0');
  const sec = String(nowTime.getSeconds()).padStart(2,'0');
  clock.value = hour + ":" + min + ":" + sec;
  setTimeout(updateClock,1000);
}

export {
    clock,
    updateClock
}