import moment, {Moment} from "moment";
import React, {useCallback, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import Calendar from "../../views/dailyBalances/Calendar/Calendar";
import {fetchDailyBalances, fetchTransactionConfigs} from "../../../store/slices/budgetSlice";
import SideDisplay from "../../views/transactionConfigs/SideDisplay";
import styles from "./Budget.module.css";

export type ChangeMonthAction = "last" | "next"

function Budget() {
    const dispatch = useAppDispatch()
    const {dailyBalances,transactionConfigs} = useAppSelector(state => state.budget)
    const [activeMonth, setActiveMonth] = useState<Moment>()
    const [searchParams, setSearchParams] = useSearchParams()

    const ChangeMonth = useCallback((action: ChangeMonthAction, activeMonth: Moment) => {
        let nextMonth = activeMonth.format("YYYY-MM")
        if(action === "last") {
            nextMonth = activeMonth.subtract(1,"month").format("YYYY-MM")
        }
        if(action === "next") {
            nextMonth = activeMonth.add(1,"month").format("YYYY-MM")
        }
        setSearchParams({
            month: nextMonth
        })
    },[])

    useEffect(() => {
        if(activeMonth){
            const isSameMonth = dailyBalances.month ? moment(dailyBalances.month).isSame(activeMonth) : false
            if(!isSameMonth){
                dispatch(fetchDailyBalances(activeMonth))
            }
        }
        if(transactionConfigs.status === 'idle'){
            dispatch(fetchTransactionConfigs())
        }
    }, [
        activeMonth,
        dispatch,
        dailyBalances,
        transactionConfigs
    ])

    useEffect(() => {
        const initialMonth = moment().startOf("month")
        if(!searchParams.get("month")){
            setSearchParams({
                month: initialMonth.format("YYYY-MM")
            })
        } else {
            const month = moment(searchParams.get("month")).startOf("month")
            setActiveMonth(month)
        }
    }, [searchParams])

    if(dailyBalances.status === 'idle' || dailyBalances.status === 'loading'){
        return <Loading/>
    }

    return (
        <div className={`${styles.budgetCtn}`}>
            <SideDisplay name={`Transaction Configs`} data={transactionConfigs.data} />
            <Calendar balanceMatrix={dailyBalances.data} activeMonth={activeMonth} ChangeMonth={ChangeMonth}/>
        </div>
    )
}

export default Budget