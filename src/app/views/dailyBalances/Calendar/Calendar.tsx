import  {Moment} from "moment";
import React from 'react';
import Loading from "../../../components/Loading/Loading";
import {ChangeMonthAction} from "../../../pages/Budget/Budget";
import styles from "./Calendar.module.css";
import {daysOfWeek, DayDetailsDisplay} from "./Calendar.utils"

type CalendarProps = {
    activeMonth: Moment | undefined;
    balanceMatrix: DayDetailsDisplay[][];
    ChangeMonth: (action: ChangeMonthAction, activeMonth: Moment) => void
}

function Calendar({balanceMatrix, activeMonth, ChangeMonth}: CalendarProps) {

    if(!activeMonth) return <Loading/>

    return (
      <div className={`${styles.ctn}`}>
        <div className={`${styles.TableNav}`}>
            <button className={`${styles.ctnBtn}`} onClick={() => ChangeMonth("last", activeMonth)}>Last</button>
            <h1>{activeMonth.format("MMMM")}</h1>
            <button className={`${styles.ctnBtn}`} onClick={() => ChangeMonth("next", activeMonth)}>Next</button>
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
                    balanceMatrix?.map((week, W) => {
                        return (
                            <div key={`week-${W}`} className={`${styles.Week}`}>
                                {
                                    week.map((day, D) => {
                                        const {transactions, balance, dayOfMonth} = day
                                        return (
                                            <div key={`week-${W}-day-${D}`} className={`${styles.Day} ${transactions? styles.hasTransactions : ""}`}>
                                                {dayOfMonth && (
                                                  <>
                                                      <div className={`${styles.date}`}>{dayOfMonth}</div>
                                                          {
                                                              transactions?.map((t, T) => {
                                                                  return (
                                                                    <div key={`${t.name}-${T}`} className={`${styles.transaction}`}><span>{t.name}:</span><span>{t.amount}</span></div>
                                                                  )
                                                              })
                                                          }
                                                      <div className={`${styles.balance}`}>{balance}</div>
                                                  </>)}
                                            </div>
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