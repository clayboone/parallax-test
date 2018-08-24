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
        window.accelHistory.y.push(aX);
        window.accelHistory.z.push(aZ);
    }

    document.querySelector('#x').innerHTML = aX.toFixed(2);
    document.querySelector('#y').innerHTML = aY.toFixed(2);
    document.querySelector('#z').innerHTML = aZ.toFixed(2);
}
