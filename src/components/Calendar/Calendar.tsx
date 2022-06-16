import React from 'react';
import styles from "./Calendar.module.css";

function Calendar() {
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