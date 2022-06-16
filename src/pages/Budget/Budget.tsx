import React from 'react';
import Calendar from "../../components/Calendar/Calendar";
import styles from "./Budget.module.css";

function Budget() {
    return (
        <div className={`${styles.budgetCtn}`}>
            <h1>Budget</h1>
            <Calendar/>
        </div>
    )
}

export default Budget