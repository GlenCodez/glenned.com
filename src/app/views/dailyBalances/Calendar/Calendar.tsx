import {BalancesResponse} from "glentils/dist/types";
import moment from "moment";
import React, {useEffect, useState} from 'react';
import styles from "./Calendar.module.css";
import {CalendarProps, daysOfWeek, transformBalanceData} from "./Calendar.utils"


function Calendar({balances}: CalendarProps) {
    const [activeMonth, setActiveMonth] = useState(moment().startOf("month"))
    const [weeksInMonth, setWeeksInMonth] = useState<string[][]>()

    useEffect(() => {
        if(balances){
            setWeeksInMonth(transformBalanceData(balances as BalancesResponse, activeMonth))
        }
    }, [activeMonth, balances, setWeeksInMonth])

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
                    weeksInMonth?.map((week, index) => {
                        return (
                            <div key={`week-${index}`} className={`${styles.Week}`}>
                                {
                                    week.map((day) => {
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