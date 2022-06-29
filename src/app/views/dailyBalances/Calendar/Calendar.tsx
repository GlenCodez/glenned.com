import {BalancesResponse} from "glentils/dist/types";
import moment from "moment";
import React, {useEffect, useState} from 'react';
import styles from "./Calendar.module.css";
import {CalendarProps, daysOfWeek, BuildBalanceMatrix, DayDetailsDisplay} from "./Calendar.utils"


function Calendar({balances}: CalendarProps) {
    const [activeMonth, setActiveMonth] = useState(moment().startOf("month"))
    const [balanceMatrix, setBalanceMatrix] = useState<DayDetailsDisplay[][]>()

    useEffect(() => {
        if(balances){
            setBalanceMatrix(BuildBalanceMatrix(balances as BalancesResponse, activeMonth))
        }
    }, [activeMonth, balances, setBalanceMatrix])

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
                                                      <div>
                                                          {
                                                              transactions?.map((t, T) => {
                                                                  return (
                                                                    <div key={`${t.name}-${T}`}>{t.name}</div>
                                                                  )
                                                              })
                                                          }
                                                      </div>
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