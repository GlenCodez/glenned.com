import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import Calendar from "../../components/Calendar/Calendar";
import {fetchDailyBalances} from "../../store/slices/budgetSlice";
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
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className={`${styles.budgetCtn}`}>
            <h1>Budget</h1>
            <Calendar balances={budgetSlice.dailyBalances}/>
        </div>
    )
}

export default Budget