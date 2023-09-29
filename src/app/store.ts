import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice/projectsSlice"
import filtersReducer from "./filtersSlice/filtersSlice"
import languageReducer from "./languageSlice/languageSlice"

export const store = configureStore({
    reducer: {
        projectsSlice: projectsReducer,
        filtersSlice: filtersReducer,
        languageSlice: languageReducer
    }
})
export type RootState = ReturnType<typeof store.getState>