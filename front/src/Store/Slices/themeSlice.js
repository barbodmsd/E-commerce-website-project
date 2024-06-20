import { createSlice } from "@reduxjs/toolkit"

const initialState={
    theme:'light'
}
// create themeSlice
const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        // write the actions for themeSlice
        toggleTheme:(state)=>{
            state.theme=(state.theme==='light'?'dark':'light')
        }
    }
})
export const {toggleTheme}=themeSlice.actions
export default themeSlice.reducer
// export the what we need