const getAngles = (seconds: number, minutes: number, hours: number) => {
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + 90;
  return {
    secondsDegrees,
    minutesDegrees,
    hoursDegrees,
  };
};

const setTime = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const { secondsDegrees, minutesDegrees, hoursDegrees } = getAngles(seconds, minutes, hours);
  
  const secondHand: HTMLElement = <HTMLElement>document.querySelector('.second-hand');
  const minuteHand: HTMLElement = <HTMLElement>document.querySelector('.min-hand');
  const hourHand: HTMLElement = <HTMLElement>document.querySelector('.hour-hand');

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setTime, 1000);