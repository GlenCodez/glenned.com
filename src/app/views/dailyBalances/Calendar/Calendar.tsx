import {BalancesResponse} from "glentils/dist/types";
import moment, {Moment} from "moment";
import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import styles from "./Calendar.module.css";
import {CalendarProps, daysOfWeek, BuildBalanceMatrix, DayDetailsDisplay} from "./Calendar.utils"


function Calendar({balances}: CalendarProps) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [activeMonth, setActiveMonth] = useState<Moment>()
    const [balanceMatrix, setBalanceMatrix] = useState<DayDetailsDisplay[][]>()

    useEffect(() => {
        const initialMonth = moment().startOf("month")
        if(!searchParams.get("month")){
            setSearchParams({
                month: initialMonth.format("YYYY-MM")
            })
        } else {
            if(balances && activeMonth){
                setBalanceMatrix(BuildBalanceMatrix(balances as BalancesResponse, activeMonth))
            } else {
                const month = moment(searchParams.get("month")).startOf("month")
                setActiveMonth(month)
            }
        }
    }, [activeMonth, balances, setBalanceMatrix])

    if(!activeMonth) return <Loading/>

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