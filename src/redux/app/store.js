import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationsSlice";
import customersReducer from "../features/customersSlice";

export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
        customers: customersReducer
    }
})