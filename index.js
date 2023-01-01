import { Temporal } from "@js-temporal/polyfill"

// const todaysDate = Temporal.Now.plainDateTime('persian')
// console.log(todaysDate.toString())

// const onlyTheDate = Temporal.Now.plainDateISO()
// const onlyTheTime = Temporal.Now.plainTimeISO()

// console.log(onlyTheDate.toString())

// console.log(onlyTheTime.toString())

// const timeInMyLocation = Temporal.Now.zonedDateTimeISO();
// console.log(timeInMyLocation.toString());

// const americanTime = Temporal.Now.zonedDateTimeISO("America/Los_Angeles");
// console.log(americanTime.toString());

// const today = Temporal.Now.plainDateISO()
// console.log(today.subtract({ days: 12, months: 5 }).toString())

const today = Temporal.Now.plainDateISO()
console.log(today.with({ year: 1999, month: 5 }).toString())