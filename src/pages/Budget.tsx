import React from 'react';
import "./Budget.css";

function Budget() {
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
        <div className="budget-ctn">
            <h1>Budget</h1>
            <div className="budget-table-ctn">
                <div className="budget-table-head">
                    {
                        daysOfWeek.map((day) => {
                            return (
                                <div key={day}>{day}</div>
                            )
                        })
                    }
                </div>
                <div className="budget-table-body">
                    {
                        weekOfMonth.map((week) => {
                            return (
                                <div key={`week-${week}`} className="budget-week">
                                    {
                                        daysOfWeek.map((day) => {
                                            return (
                                                <div key={day + week} className="budget-day">{day}</div>
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

export default Budget