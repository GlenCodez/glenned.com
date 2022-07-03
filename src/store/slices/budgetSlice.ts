import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BalancesResponse, PeriodicTransactionConfig} from "glentils/dist/types";
import moment, {Moment} from "moment";
import {WithId} from "mongodb";
import client from "../../api/client";
import {DayDetailsDisplay} from "../../app/views/dailyBalances/Calendar/Calendar.utils";

type BudgetState = {
    dailyBalances: {
        month?: string;
        status: string;
        data: DayDetailsDisplay[][]
    };
    transactionConfigs: {
        status: string;
        data: WithId<PeriodicTransactionConfig>[]
    }
}

const initialState: BudgetState = {
    dailyBalances: {
        status: 'idle',
        data: []
    },
    transactionConfigs: {
        status: 'idle',
        data: []
    }
}

export const BuildBalanceMatrix = (input: BalancesResponse, activeMonth: Moment): DayDetailsDisplay[][] => {
    const balanceMatrix: DayDetailsDisplay[][] = []
    const weeksCount = 5
    const dayCount = 7
    const {latestMonthEnding, dailyBalances} = input
    const startDay = activeMonth.day()
    let started = false
    let currentBalance = latestMonthEnding.amount
    const activeDay = moment(activeMonth)
    for(let w = 0; w < weeksCount; w++){
        balanceMatrix[w] = []
        for(let d = 0; d < dayCount; d++){
            const element: DayDetailsDisplay = {
                dayOfMonth: null,
                balance: currentBalance
            }
            if(d === startDay || started){
                started = true
                const key = activeDay.format("YYYY-MM-DD")
                const dayDetails = dailyBalances[key]
                if(dayDetails){
                    element.transactions = dayDetails.transactions
                    element.balance = dayDetails.balance
                    currentBalance = dayDetails.balance
                }
                element.dayOfMonth = activeDay.date().toString()
                activeDay.add(1, 'day')
            }
            balanceMatrix[w][d] = element;
        }
    }
    return balanceMatrix
}

export const fetchDailyBalances = createAsyncThunk('budget/fetchDailyBalances', async (month: Moment) => {
    const response = await client.get.dailyBalances(month);
    const data = BuildBalanceMatrix(response, month);
    return {
        month: month.format("YYYY-MM"),
        data
    };
})

export const fetchTransactionConfigs = createAsyncThunk('budget/fetchTransactionConfigs', async () => {
    const data = await client.get.transactionConfigs();
    return data;
})

const slice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        dummy: () => {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDailyBalances.pending, (state: BudgetState, action) => {
                state.dailyBalances.status = 'loading'
            })
            .addCase(fetchDailyBalances.fulfilled, (state: BudgetState, action) => {
                state.dailyBalances.status = 'success'
                state.dailyBalances.data = action.payload.data
                state.dailyBalances.month = action.payload.month
            })
            .addCase((fetchDailyBalances.rejected), (state: BudgetState, action) => {
                state.dailyBalances.status = 'fail'
            })
            .addCase(fetchTransactionConfigs.pending, (state: BudgetState, action) => {
              state.transactionConfigs.status = 'loading'
            })
            .addCase(fetchTransactionConfigs.fulfilled, (state: BudgetState, action) => {
              state.transactionConfigs.status = 'success'
              state.transactionConfigs.data = action.payload
            })
            .addCase((fetchTransactionConfigs.rejected), (state: BudgetState, action) => {
              state.transactionConfigs.status = 'fail'
            })
    }
})

export const {
    dummy
} = slice.actions
export const budgetSlice = slice
export default slice.reducer