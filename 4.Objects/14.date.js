const now = new Date();
const date1 = new Date('11 May 2022 09:00');
const date2 = new Date(2022, 4, 11, 9)
console.log(now)

now.setFullYear(2020)
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toISOString())