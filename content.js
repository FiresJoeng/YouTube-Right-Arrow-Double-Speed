(function () {

    let holdTimer = null;
    let popup = null;
    const holdThreshold = 500;
    let isDoubleSpeedActive = false;

    // 设置视频播放速率
    function setPlaybackSpeed(rate) {
        try {
            const video = document.querySelector('video');
            if (video) {
                video.playbackRate = rate;
            } else {
                console.error("No video element found.");
            }
        } catch (e) {
            console.error("Error setting playback speed:", e);
        }
    }

    // 添加 Pop Up 文字提示
    function showPersistentPopup(message) {
        try {
            if (popup) return;
            popup = document.createElement('div');
            popup.style.position = 'fixed';
            popup.style.top = '5%';
            popup.style.left = '50%';
            popup.style.transform = 'translateX(-50%)';
            popup.style.padding = '10px 20px';
            popup.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            popup.style.color = '#fff';
            popup.style.fontSize = '16px';
            popup.style.zIndex = '9999';
            popup.style.borderRadius = '5px';
            popup.textContent = message;
            document.body.appendChild(popup);
        } catch (e) {
            console.error("Error displaying popup message:", e);
        }
    }

    // 移除 Pop Up 文字提示
    function removePopup() {
        try {
            if (popup && popup.parentNode) {
                popup.parentNode.removeChild(popup);
            }
            popup = null;
        } catch (e) {
            console.error("Error removing popup:", e);
        }
    }

    // 捕获 keydown 事件
    document.addEventListener('keydown', function (e) {
        try {
            if (e.key === "ArrowRight") {

                e.preventDefault();
                e.stopImmediatePropagation();

                if (holdTimer === null) {
                    holdTimer = setTimeout(() => {
                        isDoubleSpeedActive = true;
                        setPlaybackSpeed(2.0);
                        showPersistentPopup("Right Arrow 2x Speed: Running");
                    }, holdThreshold);
                }
            }
        } catch (error) {
            console.error("Error in keydown event:", error);
        }
    }, true);

    // 捕获 keyup 事件
    document.addEventListener('keyup', function (e) {
        try {
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
                removePopup();
            }
        } catch (error) {
            console.error("Error in keyup event:", error);
        }
    }, true);

})();
