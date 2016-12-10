const playAudio = (audio) => {
    if (!audio)
        return;
    audio.currentTime = 0;
    audio.play();
};
const playFromKeydown = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    playAudio(audio);
    key.classList.add('playing');
};
const playFromClick = (key) => {
    const dataKey = key.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    playAudio(audio);
    key.classList.add('playing');
};
const removeTransition = (key, e) => {
    const transitionEvent = e;
    if (transitionEvent.propertyName !== 'box-shadow')
        return;
    key.classList.remove('playing');
};
const init = () => {
    window.addEventListener('keydown', playFromKeydown);
    const keys = document.querySelectorAll('.key');
    const keysArr = Array.from(keys);
    keysArr.forEach(key => {
        key.addEventListener('transitionend', e => removeTransition(key, e));
        key.addEventListener('click', e => playFromClick(key));
    });
};
init();
