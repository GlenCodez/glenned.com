import moment from "moment";

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]
export const weekOfMonth = [0,1,2,3,4]

export const transformBalanceData = (input: any) => {
  console.log(input)
  // Object.entries(balances).forEach((entry,index) => {
  //   if(index === 0) {
  //     console.log(daysOfWeek[moment(entry[0]).day()])
  //   }
  // })
}

export type CalendarProps = {
  balances: any
}