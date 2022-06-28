import {BalancesResponse} from "glentils/dist/types";
import moment, {Moment} from "moment";

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]
export const weeksInMonth: string[][] = [
  ["","","","","","",""],
  ["","","","","","",""],
  ["","","","","","",""],
  ["","","","","","",""],
  ["","","","","","",""]
]


export const transformBalanceData = (input: BalancesResponse, activeMonth: Moment) => {
  const {latestMonthEnding, dailyBalances} = input
  let lastBalance = latestMonthEnding.amount
  const startDay = activeMonth.day()
  let started = false
  const activeDay = moment(activeMonth)
  weeksInMonth.forEach((week, weekIndex) => {
    week.forEach((day,dayIndex) => {
      if(dayIndex === startDay || started){
        started = true
        const key = activeDay.format("YYYY-MM-DD")
        const dayDetails = dailyBalances[key]
        if(!dayDetails){
          weeksInMonth[weekIndex][dayIndex] = lastBalance
        } else {
          weeksInMonth[weekIndex][dayIndex] = dayDetails.balance
          lastBalance = dayDetails.balance
        }
        activeDay.add(1, 'day')
      }
    })
  })
  return weeksInMonth
}

export type CalendarProps = {
  balances: BalancesResponse | {}
}