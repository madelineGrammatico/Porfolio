import { createSlice,
    Draft,
    PayloadAction
} from "@reduxjs/toolkit"

export type FiltersType  = {
    filters: string[]
}
const initialState: FiltersType= {
    filters: []
}

export const filtersSlice = createSlice({
    name:"filters",
    initialState,
    reducers: {
       addFilter:(state: Draft<FiltersType>, action: PayloadAction<string>) => {
            (state.filters.includes(action.payload))? 
                null : state.filters.push(action.payload)
       },
       removeFilter:(state: Draft<FiltersType>, action: PayloadAction<string>) => {
        const index = state.filters.indexOf(action.payload)
        state.filters.splice(index, 1)
    },
       initilizeFilter: () => {
            return initialState
       },
    }
})

export const {
    addFilter,
    removeFilter,
    initilizeFilter,
} = filtersSlice.actions

export default filtersSlice.reducer
