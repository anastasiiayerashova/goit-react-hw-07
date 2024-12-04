import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ''
}

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
        state.name = action.payload
        }
    },
    selectors: {
        selectNameFilter: state => state.name
    }
})

export const filtersReducer = slice.reducer
export const {selectNameFilter} = slice.selectors
export const {changeFilter} = slice.actions