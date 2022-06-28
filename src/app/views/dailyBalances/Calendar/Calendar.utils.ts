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
  Object.entries(input).forEach((entry,index) => {
    console.log(entry[0])
  })
}

export type CalendarProps = {
  balances: any
}