import {BalancesResponse, DayDetails} from "glentils/dist/types";
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

export type DayDetailsDisplay = {
  transactions?: DayDetails["transactions"],
  balance?: DayDetails["balance"],
  dayOfMonth: string | null
}

export const BuildBalanceMatrix = (input: BalancesResponse, activeMonth: Moment): DayDetailsDisplay[][] => {
  const balanceMatrix: DayDetailsDisplay[][] = []
  const weeksCount = 5
  const dayCount = 7
  const {latestMonthEnding, dailyBalances} = input
  const startDay = activeMonth.day()
  let started = false
  let currentBalance = latestMonthEnding.amount
  const activeDay = moment(activeMonth)
  for(let w = 0; w < weeksCount; w++){
    balanceMatrix[w] = []
    for(let d = 0; d < dayCount; d++){
      const element: DayDetailsDisplay = {
        dayOfMonth: null,
        balance: currentBalance
      }
      if(d === startDay || started){
        started = true
        const key = activeDay.format("YYYY-MM-DD")
        const dayDetails = dailyBalances[key]
        if(dayDetails){
          element.transactions = dayDetails.transactions
          element.balance = dayDetails.balance
          currentBalance = dayDetails.balance
        }
        element.dayOfMonth = activeDay.date().toString()
        activeDay.add(1, 'day')
      }
      balanceMatrix[w][d] = element;
    }
  }
  return balanceMatrix
}

export type CalendarProps = {
  balances: BalancesResponse | {}
}