const inputs = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.controls input');
const inputArray: Array<HTMLInputElement> = Array.from(inputs);

const changeCSSVariable = (input: HTMLInputElement) => 
  document.documentElement.style.setProperty(`--${input.name}`, `${input.value}${input.dataset['sizing'] || ''}`);

inputArray.forEach(input => {
  input.addEventListener('mousemove', () => changeCSSVariable(input));
  input.addEventListener('change', () => changeCSSVariable(input));
});

