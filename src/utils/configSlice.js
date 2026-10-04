import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        language: 'en'
    },
    reducers: {
        addLanguageConfiguration: (state, action) => {
            state.language = action.payload
        }
    }
})

export const {addLanguageConfiguration} = configSlice.actions

export default configSlice.reducer