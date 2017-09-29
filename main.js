(() => {
    const liberation = moment('2017-11-17T16:00:00+01:00'),
        $countdown = document.querySelector('#countdown'),
        $days = $countdown.querySelector('.days'),
        $hours = $countdown.querySelector('.hours'),
        $minutes = $countdown.querySelector('.minutes'),
        $seconds = $countdown.querySelector('.seconds');

    refreshCountdown();
    setInterval(refreshCountdown, 1000);

    function refreshCountdown() {
        const duration = moment.duration(liberation.diff(moment()));

        $days.innerHTML = leftPad(Math.floor(duration.asDays()), 2, 0);
        $hours.innerHTML = leftPad(duration.hours(), 2, 0);
        $minutes.innerHTML = leftPad(duration.minutes(), 2, 0);
        $seconds.innerHTML = leftPad(duration.seconds(), 2, 0);
    }

    // https://gist.github.com/wafflesnatcha/3694295
    function leftPad(input, length, pad) {
        input = input + '';
        if (input.length >= length) {
            return input;
        }

        pad = pad + '' || ' ';
        return (new Array(
            Math.ceil((length - input.length) / pad.length) + 1).join(pad)
        ).substr(0, (length - input.length)) + input;
    }
})();