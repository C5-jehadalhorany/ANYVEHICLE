import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"
import maintenanceReducer from "./Maintenance";

export default configureStore ({
    reducer:{
        auth:authReducer,
        maintenance:maintenanceReducer
    },
})