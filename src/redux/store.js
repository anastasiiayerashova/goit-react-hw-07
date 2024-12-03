import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filters: filtersSlice,
    }
})