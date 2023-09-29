import { 
    createSlice,
    Draft
} from "@reduxjs/toolkit"


export type Language = {
    language: "EN" | "FR"
}
const initialState: Language = {
    language: "EN"
}


export const languageSlice = createSlice({
    name:"Language",
    initialState,
    reducers: {
        toggleLanguage:(state: Draft<Language>) => {
            (state.language === "FR")? state.language = "EN": state.language = "FR"
        },
        initializeLanguage: () =>{
            return initialState
        }
    }
})

export const {
    toggleLanguage,
    initializeLanguage
} = languageSlice.actions

export default languageSlice.reducer