(function() {
  let holdTimer = null;
  const holdThreshold = 500;
  let isDoubleSpeedActive = false;


  function setPlaybackSpeed(rate) {
    const video = document.querySelector('video');
    if (video) {
      video.playbackRate = rate;
    }
  }


  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {

      e.preventDefault();
      e.stopImmediatePropagation();


      if (holdTimer === null) {
        holdTimer = setTimeout(() => {
          isDoubleSpeedActive = true;
          setPlaybackSpeed(2.0);
        }, holdThreshold);
      }
    }
  }, true);


  document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowRight") {

      e.preventDefault();
      e.stopImmediatePropagation();


      if (holdTimer) {
        clearTimeout(holdTimer);
        holdTimer = null;
      }

      if (isDoubleSpeedActive) {
        setPlaybackSpeed(1.0);
        isDoubleSpeedActive = false;
      }
    }
  }, true);
})();
