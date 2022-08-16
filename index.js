const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6);
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

  setInterval(setDate, 1000);

  setDate();























  

  // setInterval(setDate, 1000);

  // const secondHand = document.querySelector('.second-hand');
  // const minsHand = document.querySelector('.min-hand');
  // const hourHand = document.querySelector('.hour-hand');

  // function setDate() {
  //   const now = new Date();

  //   const secondsRatio = currentDate.getSeconds() / 60
  //   const minutesRation = (secondsRatio + currentDate.getMinutes()) / 60
  //   const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  //   setRotation(secondHand, secondsRatio)
  //   setRotation(minsHand, minutesRatio)
  //   setRotation(hourHand, hoursRatio)  
  // }

  // function setRotation(element, rotationRatio) {
  //   element.style.setProperty('--rotation', rotationRatio * 360)
  // }

  // setDate();

  

