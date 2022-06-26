import moment from "moment";
import React, {useEffect} from 'react';
import styles from "./Calendar.module.css";

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
const weekOfMonth = [0,1,2,3,4]

type CalendarProps = {
    balances: any
}

function Calendar({balances}: CalendarProps) {

    useEffect(() => {
        if(balances){
            Object.entries(balances).forEach((entry,index) => {
                if(index === 0) {
                    console.log(daysOfWeek[moment(entry[0]).day()])
                }
            })
        }
    }, [balances])

    return (
        <div className={`${styles.TableCtn}`}>
            <div className={`${styles.TableHead}`}>
                {
                    daysOfWeek.map((day) => {
                        return (
                            <div key={day}>{day}</div>
                        )
                    })
                }
            </div>
            <div className={styles.TableBody}>
                {
                    weekOfMonth.map((week) => {
                        return (
                            <div key={`week-${week}`} className={`${styles.Week}`}>
                                {
                                    daysOfWeek.map((day) => {
                                        return (
                                            <div key={day + week} className={`${styles.Day}`}>{day}</div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Calendar