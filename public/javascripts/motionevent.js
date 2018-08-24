window.addEventListener('load', (ev) => {
    if (window.DeviceMotionEvent !== undefined) {
        console.log('detected motion event support');
        window.addEventListener('devicemotion', handleMotion);
    }
});

function handleMotion(ev) {
    const aX = ev.accelerationIncludingGravity.x*1;
    const aY = ev.accelerationIncludingGravity.y*1;
    const aZ = ev.accelerationIncludingGravity.z*1;

    document.querySelector('#x').innerHTML = aX.toFixed(2);
    document.querySelector('#y').innerHTML = aY.toFixed(2);
    document.querySelector('#z').innerHTML = aZ.toFixed(2);
}
