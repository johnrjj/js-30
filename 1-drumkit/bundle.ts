const playAudio = (audio: HTMLAudioElement) => {
  audio.currentTime = 0;
  audio.play();
};

const playFromKeydown = (e: KeyboardEvent) => {
  const audio: HTMLAudioElement = <HTMLAudioElement>document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key: Element = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  playAudio(audio);
  key.classList.add('playing');
};

const playFromClick = (key: Element) => {
  const dataKey: string = key.getAttribute('data-key');
  const audio: HTMLAudioElement = <HTMLAudioElement>document.querySelector(`audio[data-key="${dataKey}"]`);
  if (!audio) return;
  playAudio(audio);
  key.classList.add('playing');
};

const removeTransition = (key: Element, e: Event) => {
  const transitionEvent: TransitionEvent = <TransitionEvent>e; // need to cast here boo
  if (transitionEvent.propertyName !== 'box-shadow') return;
  key.classList.remove('playing');
};

const init = () => {
  window.addEventListener('keydown', playFromKeydown);
  const keys: NodeListOf<Element> = document.querySelectorAll('.key');
  const keysArr: Element[] = Array.from(keys);
  keysArr.forEach(key => {
    key.addEventListener('transitionend', e => removeTransition(key, e));
    key.addEventListener('click', e => playFromClick(key));
  });
};
init();


