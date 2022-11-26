import { createSlice } from "@reduxjs/toolkit";

export const chart = createSlice({
    name: "chart",
    initialState: {
        name: "chart",
        chart: 0,
    },
    reducers: {
        setchartAction: (state, action) => {
            state.chart = action.payload
            console.log(action.payload,"im here im redux");
        },

        reducechartAction: (state, action) => {
            state.chart = state.chart + 0
        },
    }
})


export const { setchartAction, reducechartAction } = chart.actions

export default chart.reducer