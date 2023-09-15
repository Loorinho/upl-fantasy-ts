import { PayloadAction, createSlice } from "@reduxjs/toolkit";

 type UserType = {
    firstName: string,
    lastName: string,
    email: string
 }
 type InitialState = {
    myuser: UserType
 }
const initialState: InitialState = {
    myuser: {
        firstName: "Loor",
        lastName: "Inho",
        email: "romeojacobson@gmail.com"
    }
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action:PayloadAction<UserType> ) =>{
            const data = action.payload
            state.myuser = data
        },

    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer