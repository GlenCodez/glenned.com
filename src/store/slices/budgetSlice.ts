import {AnyAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import client from "../../api/client";

type State = {
    status: string;
    dailyBalances: {
        [key:string]: any
    };
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
    initialState: {
        dailyBalances: {
            status: 'idle',
            data: {}
        },
        transactionConfigs: {
            status: 'idle',
            data: {}
        }
    },
    reducers: {
        dummy: () => {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDailyBalances.pending, (state, action) => {
                state.dailyBalances.status = 'loading'
            })
            .addCase(fetchDailyBalances.fulfilled, (state, action) => {
                state.dailyBalances.status = 'success'
                state.dailyBalances.data = action.payload
            })
            .addCase((fetchDailyBalances.rejected), (state, action) => {
                state.dailyBalances.status = 'fail'
            })
            .addCase(fetchTransactionConfigs.pending, (state, action) => {
              state.transactionConfigs.status = 'loading'
            })
            .addCase(fetchTransactionConfigs.fulfilled, (state, action) => {
              state.transactionConfigs.status = 'success'
              state.transactionConfigs.data = action.payload
            })
            .addCase((fetchTransactionConfigs.rejected), (state, action) => {
              state.transactionConfigs.status = 'fail'
            })
    }
})

export const {
    dummy
} = slice.actions
export const budgetSlice = slice
export default slice.reducer