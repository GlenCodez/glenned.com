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

const slice = createSlice({
    name: 'budget',
    initialState: {
        status: 'idle',
        dailyBalances: {}
    },
    reducers: {
        dummy: () => {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDailyBalances.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchDailyBalances.fulfilled, (state, action) => {
                state.status = 'success'
                state.dailyBalances = action.payload
            })
            .addCase((fetchDailyBalances.rejected), (state, action) => {
                state.status = 'fail'
            })
    }
})

export const {
    dummy
} = slice.actions
export const budgetSlice = slice
export default slice.reducer