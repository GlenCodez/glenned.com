import moment from "moment";
import React, {useEffect, useState} from 'react';
import styles from "./Calendar.module.css";
import {CalendarProps, daysOfWeek, weekOfMonth, transformBalanceData} from "./Calendar.utils"


function Calendar({balances}: CalendarProps) {
    const [activeMonth, setActiveMonth] = useState(moment().startOf("month"))

    useEffect(() => {
        if(balances){
            transformBalanceData(balances)
        }
    }, [balances])

    return (
      <div className={`${styles.ctn}`}>
        <div>
          <h1>{activeMonth.format("MMMM")}</h1>
        </div>
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
      </div>
    )
}

export default Calendar