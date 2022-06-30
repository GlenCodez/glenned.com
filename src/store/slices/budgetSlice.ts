import {AnyAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DailyBalances, PeriodicTransactionConfig} from "glentils/dist/types";
import client from "../../api/client";

type BudgetState = {
    dailyBalances: {
        status: string;
        data: DailyBalances
    };
    transactionConfigs: {
        status: string;
        data: PeriodicTransactionConfig[]
    }
}

const initialState: BudgetState = {
    dailyBalances: {
        status: 'idle',
        data: {}
    },
    transactionConfigs: {
        status: 'idle',
        data: []
    }
}

export const fetchDailyBalances = createAsyncThunk('budget/fetchDailyBalances', async () => {
    const data = await client.get.dailyBalances();
    return data;
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
                state.dailyBalances.data = action.payload
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