import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./contactsOps"

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const slice = createSlice({
    name: 'contacts',
    initialState,
    selectors: {
        selectContacts: state => state.items,
        selectLoading: state => state.loading,
        selectError: state => state.error,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.items = action.payload
            })
            
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.items.push(action.payload)
            })
            
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.items = state.items.filter(item => item.id !== action.payload)
            })
        
            .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), (state) => {
                state.loading = true
                state.error = null
            })

            .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state, action) => {
                state.loading = false
                state.error = action.payload
        })
    }
})

export const contactsReducer = slice.reducer
export const {selectContacts, selectLoading, selectError} = slice.selectors

export const selectFilteredContacts = createSelector([selectContacts, state => state.filters.name],
    (contacts, filter) => {
    if (!filter) return contacts
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
})