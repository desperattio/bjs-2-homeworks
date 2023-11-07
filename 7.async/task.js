// задание 1
class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            time,
            callback, 
            canCall: true,
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        let date = new Date;
        return date.toLocaleTimeString("ru-RU").slice(0, 5);
    }

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(alarm => {
                    if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                        alarm.canCall = false;
                        alarm.callback();
                    }
                })
            }, 1000);
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}