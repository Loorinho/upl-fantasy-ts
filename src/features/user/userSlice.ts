import { createSlice } from "@reduxjs/toolkit";

 type UserType = {
    firstName: string,
    lastName: string,
    email: string
 }
 type TInitialState = {
    myuser: UserType
 }
const initialState: TInitialState = {
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

    },
})