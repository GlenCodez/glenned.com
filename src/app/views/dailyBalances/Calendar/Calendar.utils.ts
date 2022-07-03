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
