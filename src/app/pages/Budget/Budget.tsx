import React, {useEffect} from 'react';
import Loading from "../../components/Loading/Loading";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import Calendar from "../../views/dailyBalances/Calendar/Calendar";
import {fetchDailyBalances, fetchTransactionConfigs} from "../../../store/slices/budgetSlice";
import styles from "./Budget.module.css";

function Budget() {
    const dispatch = useAppDispatch()
    const {dailyBalances,transactionConfigs} = useAppSelector(state => state.budget)
    console.log(transactionConfigs)
    useEffect(() => {
        if(dailyBalances.status === 'idle'){
            dispatch(fetchDailyBalances())
        }
        if(transactionConfigs.status === 'idle'){
            dispatch(fetchTransactionConfigs())
        }
    }, [dispatch, dailyBalances, transactionConfigs])

    if(dailyBalances.status === 'idle' || dailyBalances.status === 'loading'){
        return <Loading/>
    }

    return (
        <div className={`${styles.budgetCtn}`}>
            <Calendar balances={dailyBalances.data}/>
        </div>
    )
}

export default Budget