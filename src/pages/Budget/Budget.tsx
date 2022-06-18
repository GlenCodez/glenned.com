import React, {useEffect, useState} from 'react';
import Calendar from "../../components/Calendar/Calendar";
import styles from "./Budget.module.css";

const apiUrl = "http://localhost:8000"
const route = "/v1/balances"

function Budget() {
    const [balances, setBalances] = useState(null)

    useEffect(() => {
        if(!balances) fetch(apiUrl + route).then(res => res.json()).then(data => setBalances(data))
    }, [balances])

    return (
        <div className={`${styles.budgetCtn}`}>
            <h1>Budget</h1>
            <Calendar balances={balances}/>
        </div>
    )
}

export default Budget