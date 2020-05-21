const countTimer = deadline => {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    const pluralTime = (elem) => elem < 10 ? `0${elem}` : elem;

    const setTimerValue = (value, isEnd) => {
        timerHours.textContent = isEnd ? value : pluralTime(value.hours);
        timerMinutes.textContent = isEnd ? value : pluralTime(value.minutes);
        timerSeconds.textContent = isEnd ? value : pluralTime(value.seconds);
    };

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
        return { timeRemaining, hours, minutes, seconds };
    };

    const updateClock = () => {
        const timer = getTimeRemaining();
        setTimerValue(timer);
    };

    const checkTimer = () => {
        const timer = getTimeRemaining();
        timer.timeRemaining > 0 ? setInterval(updateClock, 1000) : setTimerValue('00', true);
    };

    checkTimer();
};

export default countTimer;