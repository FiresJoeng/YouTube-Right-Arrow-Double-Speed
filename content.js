(function () {


    let holdTimer = null;
    const holdThreshold = 500;
    let isDoubleSpeedActive = false;


    function setPlaybackSpeed(rate) {
        const video = document.querySelector('video');
        if (video) {
            video.playbackRate = rate;
        }
    }


    document.addEventListener('keydown', function (e) {
        if (e.key === "ArrowRight" && holdTimer === null) {
            holdTimer = setTimeout(() => {
                isDoubleSpeedActive = true;
                setPlaybackSpeed(2.0);
            }, holdThreshold);
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    }, true);


    document.addEventListener('keyup', function (e) {
        if (e.key === "ArrowRight") {
            if (holdTimer) {
                clearTimeout(holdTimer);
                holdTimer = null;
            }
            if (isDoubleSpeedActive) {
                setPlaybackSpeed(1.0);
                isDoubleSpeedActive = false;
            }
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    }, true);


})();
