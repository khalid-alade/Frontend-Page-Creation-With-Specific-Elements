var ps = Array.from(document.getElementsByTagName('p'));
var weekDay = ps[0]
var time = ps[1]
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const date = new Date()
let day = date.getDay()
dayNum = Number(day)

var year = date.getUTCFullYear()
var month = date.getUTCMonth() + 1
var utcDay = date.getUTCDate()
utcHour = date.getUTCHours()
utcMin = date.getUTCMinutes()
utcSec = date.getUTCSeconds()
utcMilli = date.getUTCMilliseconds()
utcTime = `${year}-${month}-${utcDay} ${utcHour}:${utcMin}:${utcSec}.${utcMilli}`

weekDay.innerHTML = days[dayNum]
time.innerHTML = utcTime

console.log(utcTime)