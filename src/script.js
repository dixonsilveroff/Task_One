var day = document.getElementById('day')
var time = document.getElementById('time')


var updateTime = () => {
   const now = new Date()
   const utcTime = now.toUTCString().split(' ')[4]
   const dayOfTheWeek = now.toLocaleString('en-US', {weekday: 'long'})

   day.textContent = `${dayOfTheWeek}`
   time.textContent = `${utcTime}`

   console.log(dayOfTheWeek)
}

updateTime()
setInterval(updateTime, 1000);