import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"
import maintenanceReducer from "./Maintenance";
import chartReducer from "./chart";


export default configureStore({
    reducer: {
        auth: authReducer,
        maintenance: maintenanceReducer,
        chart: chartReducer
    },
})