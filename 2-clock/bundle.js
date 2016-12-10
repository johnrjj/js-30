var getAngles = function (seconds, minutes, hours) {
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    var minutesDegrees = ((minutes / 60) * 360) + 90;
    var hoursDegrees = ((hours / 12) * 360) + 90;
    return {
        secondsDegrees: secondsDegrees,
        minutesDegrees: minutesDegrees,
        hoursDegrees: hoursDegrees
    };
};
var setTime = function () {
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours() % 12;
    var _a = getAngles(seconds, minutes, hours), secondsDegrees = _a.secondsDegrees, minutesDegrees = _a.minutesDegrees, hoursDegrees = _a.hoursDegrees;
    var secondHand = document.querySelector('.second-hand');
    var minuteHand = document.querySelector('.min-hand');
    var hourHand = document.querySelector('.hour-hand');
    secondHand.style.transform = "rotate(" + secondsDegrees + "deg)";
    minuteHand.style.transform = "rotate(" + minutesDegrees + "deg)";
    hourHand.style.transform = "rotate(" + hoursDegrees + "deg)";
};
setInterval(setTime, 1000);
