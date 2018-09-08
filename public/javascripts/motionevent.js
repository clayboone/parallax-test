window.addEventListener('load', (ev) => {
    if (window.DeviceMotionEvent !== undefined) {
        // note: this works in Desktop Chrome for some reason
        window.addEventListener('devicemotion', handleMotion);
    }
});


/**
 * Display the averages of the last few event properties
 * @param {Event} DeviceMotionEvent event
 */
function handleMotion(ev) {
    const aX = ev.accelerationIncludingGravity.x*1;
    const aY = ev.accelerationIncludingGravity.y*1;
    const aZ = ev.accelerationIncludingGravity.z*1;

    if (!window.accelHistory) {
        window.accelHistory = {
            x: [aX],
            y: [aY],
            z: [aZ],
        };
    } else {
        window.accelHistory.x.push(aX);
        window.accelHistory.y.push(aY);
        window.accelHistory.z.push(aZ);
    }

    while (window.accelHistory.x.length > 50) {
        window.accelHistory.x.shift();
        window.accelHistory.y.shift();
        window.accelHistory.z.shift();
    }

    document.querySelector('#x').innerHTML = average(window.accelHistory.x).toFixed(1);
    document.querySelector('#y').innerHTML = average(window.accelHistory.y).toFixed(1);
    document.querySelector('#z').innerHTML = average(window.accelHistory.z).toFixed(1);
}


function average(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }

    return sum / list.length;
}
