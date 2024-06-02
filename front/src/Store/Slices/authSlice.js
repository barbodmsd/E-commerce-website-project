import { createSlice } from "@reduxjs/toolkit"

const initialState={
    token:null,
    user:null,
}
// create autSlice
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        // write the actions for authSlice
        sinIn:(state,action)=>{
            state.token=action.payload.token
            state.user=action.payload.user
        },
        signOut:(state)=>{
            state.token=null
            state.user=null
        }
    }
})
export const {signIn,signOut}=authSlice.actions
export default authSlice.reducer
// export the what we need