import { createSlice } from "@reduxjs/toolkit";

export const maintenance = createSlice({
    name: "maintenance",
    initialState: {
        maintenance: [],
        name: "maintenance",
    },
    reducers: {
        setmaintenance: (state, action) => {
            state.maintenance = action.payload;
        },
        addmaintenance: (state, action) => {
            state.maintenance.push(action.payload);
        },
        updatemaintenance: (state, action) => {
            state.maintenance = state.maintenance.map((element, index) => {
                if (element.id === action.payload.id) {
                    return element.id = action.payload;
                } else {
                    return element
                }
            });
        },
        deletemaintenance: (state, action) => {
            state.maintenance = state.maintenance.filter((element, index) => {
                return element.id != action.payload;
            });
        },
    }
})


export const { setmaintenance,
    addmaintenance,
    updatemaintenance,
    deletemaintenance, } = maintenance.actions

export default maintenance.reducer