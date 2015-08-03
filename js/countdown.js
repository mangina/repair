function countdown(finalDate) {
    var dtDateInMilliseconds = Math.floor(finalDate - Date.now());

    var currentDelta = new DeltaDate(dtDateInMilliseconds);

    var $domSecond = $("#timerSeconds").html(currentDelta.seconds);
    var $domMinute = $("#timerMinutes").html(currentDelta.minutes);
    var $domHour = $("#timerHours").html(currentDelta.hours);
    var $domDay = $("#timerDays").html(currentDelta.days);

    var interval = setInterval(function(){
        var newDelta = Math.floor(finalDate - Date.now() );

        if (newDelta <= 0) {
            clearInterval(interval);
            return;
        }

        currentDelta = new DeltaDate(newDelta);

        if (currentDelta.seconds !== newDelta.seconds) {
            $domSecond.html(currentDelta.seconds);
        }

        if (currentDelta.minutes!== newDelta.minutes) {
            $domMinute.html(currentDelta.minutes);
        }

        if (currentDelta.hours !== newDelta.hours) {
            $domHour.html(currentDelta.hours);
        }

        if (currentDelta.days !== newDelta.days) {
            $domDay.html(currentDelta.days);
        }
    }, 1000);
}

function DeltaDate(milliseconds) {
    this.days = Math.floor(milliseconds / (1000*60*60*24));
    this.hours = Math.floor(milliseconds / (1000*60*60)) % 24;
    this.minutes = (Math.floor(milliseconds / (1000*60))) % 60;
    this.seconds = (Math.floor(milliseconds / (1000)) % 60);
}