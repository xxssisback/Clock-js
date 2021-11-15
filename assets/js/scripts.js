function formatTime(value) {
    return String(value).padStart(2, "0");
}

const actualTime = document.getElementById("actual-time");
const addAlarmButton = document.getElementById("alarm-creator");
const addAlarmDeleter = document.getElementById("alarm-deleter");
const alarmSelector = document.getElementById("alarm-selector");
const alarmSound = new Audio('assets/sounds/alarm.wav');
let alarm = null;

addAlarmButton.addEventListener("click", () => {
    alarm = new Date(alarmSelector.value);
    Swal.fire({
        icon: 'success',
        title: 'Scheduled alarm',
        text: 'The alarm has been set successfully, turn up the volume to hear it.',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
        })
});

addAlarmDeleter.addEventListener("click", () => {
    alarm = new Date(alarmSelector.value="null");
    alarmSound.pause();
    Swal.fire({
        icon: 'success',
        title: 'Alarm cleared',
        text: 'Did you wake up?',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
        })
});

setInterval(() => {
    const timer = new Date(new Date().setMilliseconds(0));

    const formattedHours = formatTime(timer.getHours());
    const formattedMinutes = formatTime(timer.getMinutes());
    const formattedSeconds = formatTime(timer.getSeconds());

    actualTime.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    if (alarm != null && timer.getTime() == alarm.getTime()) {
        alarmSound.play();
    }
}, 1000);