import React, {useEffect, useState} from 'react';
import Loading from "../../../components/Loading/Loading";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import Calendar from "../../views/dailyBalances/Calendar/Calendar";
import {fetchDailyBalances} from "../../../store/slices/budgetSlice";
import styles from "./Budget.module.css";

function Budget() {
    const dispatch = useAppDispatch()
    const budgetSlice = useAppSelector(state => state.budget)
    useEffect(() => {
        if(budgetSlice.status === 'idle'){
            dispatch(fetchDailyBalances())
        }
    }, [dispatch, budgetSlice.status])

    if(budgetSlice.status === 'idle' || budgetSlice.status === 'loading'){
        return <Loading/>
    }

    return (
        <div className={`${styles.budgetCtn}`}>
            <h1>Budget</h1>
            <Calendar balances={budgetSlice.dailyBalances}/>
        </div>
    )
}

export default Budget