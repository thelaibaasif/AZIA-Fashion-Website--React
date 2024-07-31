import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language : "en"
}
export const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers : {
        addLanguage : ( state , action) => {
            state.language=action.payload
        }
    }
})

export const {addLanguage} = languageSlice.actions
export default languageSlice.reducer