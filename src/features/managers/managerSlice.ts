import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export type ManagerType = {
    id: number,
    firstName: string,
    lastName: string,
    // position: string,
    // foot: string,
    // team: number
}

type InitialState = {
    manager: ManagerType,
    managers: ManagerType[]
}

const initialState: InitialState = {
    manager: {} as ManagerType,
    managers: []

}
export const managerSlice = createSlice({
    name: "manager",
    initialState,
    reducers: {
        setManagers: (state, action:PayloadAction<ManagerType[]> ) =>{
            const data = action.payload
            state.managers = data
        },
        setManager: (state, action:PayloadAction<ManagerType> ) =>{
            const data = action.payload
            state.manager = data
        },
       
    }
})


export const { setManagers, setManager } = managerSlice.actions
export default managerSlice.reducer