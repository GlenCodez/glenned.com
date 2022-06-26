import moment from "moment";
import React, {useEffect} from 'react';
import styles from "./Calendar.module.css";
import {CalendarProps, daysOfWeek, weekOfMonth, transformBalanceData} from "./Calendar.utils"


function Calendar({balances}: CalendarProps) {

    useEffect(() => {
        if(balances){
            transformBalanceData(balances)
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