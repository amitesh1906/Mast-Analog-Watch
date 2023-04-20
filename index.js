// setInterval(setClock, 1000)

// const hourHand=document.querySelector('[date-hour-hand]')
// const minuteHand=document.querySelector('[date-minute-hand]')
// const secondHand=document.querySelector('[date-second-hand]')

// function setClock() {
//     const currentDate = new Date()
//     const secRatio = currentDate.getSeconds()/60
//     const minRatio = (secRatio+currentDate.getMinutes())/60
//     const hourRatio = (minRatio+currentDate.getHours())/12

//     setRotation (secondhand,secRatio)
//     setRotation (minutehand,minRatio)
//     setRotation (hourhand,hourRatio)



// }


// function setRotation(element , rotationRatio){
//     element.style.setProperty('--rotation',rotationRatio*360);
// }
// setClock()

setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()