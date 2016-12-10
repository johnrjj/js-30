var playAudio = function (audio) {
    audio.currentTime = 0;
    audio.play();
};
var playFromKeydown = function (e) {
    var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
    var key = document.querySelector(".key[data-key=\"" + e.keyCode + "\"]");
    if (!audio)
        return;
    playAudio(audio);
    key.classList.add('playing');
};
var playFromClick = function (key) {
    var dataKey = key.getAttribute('data-key');
    var audio = document.querySelector("audio[data-key=\"" + dataKey + "\"]");
    if (!audio)
        return;
    playAudio(audio);
    key.classList.add('playing');
};
var removeTransition = function (key, e) {
    var transitionEvent = e; // need to cast here boo
    if (transitionEvent.propertyName !== 'box-shadow')
        return;
    key.classList.remove('playing');
};
var init = function () {
    window.addEventListener('keydown', playFromKeydown);
    var keys = document.querySelectorAll('.key');
    var keysArr = Array.from(keys);
    keysArr.forEach(function (key) {
        key.addEventListener('transitionend', function (e) { return removeTransition(key, e); });
        key.addEventListener('click', function (e) { return playFromClick(key); });
    });
};
init();
