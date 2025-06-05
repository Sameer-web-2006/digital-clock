const clock = document.getElementById("clock");

const run = () => {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if (hour > 12) hour -= 12;
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;

    clock.innerText = `${hour} : ${minute} : ${second}`;
};

setInterval(run, 900);
