/**
* calcDate - Считаем разницу между Date.now()
*
* @param  {int} start - начало временного отрезка
* @param  {int} end   - конец временного отрезка
*
* @return {object} - { hours, minutes, seconds }
*/

const calcDate = (start, end) => {
    if (!start || !end) {
        return false;
    }

    let diff = (start - end);

    /* hours */
    const hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= (hours * 1000 * 60 * 60);

    /* minutes */
    const minutes = Math.floor(diff / 1000 / 60);
    diff -= (minutes * 1000 * 60);

    /* seconds */
    const seconds = Math.floor(diff / 1000);

    return { hours, minutes, seconds };
};

const getElapsedTime = () => {
    const copyTms = 1593650184506;
    const currentTms = Date.now();

    if (copyTms) {
        const { hours, minutes, seconds } = calcDate(currentTms, copyTms);

        if (hours) {
            return `${hours} h.`;
        }

        if (minutes) {
            return `${minutes} m.`;
        }

        return `${seconds} s.`;
    }
};

export default {
    calcDate,
    getElapsedTime
};
