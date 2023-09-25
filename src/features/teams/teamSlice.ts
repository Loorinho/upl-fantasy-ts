import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export type TeamType = {
    id: number,
    name: string,
    city: string,
    country: string
}

type InitialState = {
    team: TeamType,
    teams: TeamType[]
}

const initialState: InitialState = {
    team: {} as TeamType,
    teams: []

}
export const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
        setTeams: (state, action:PayloadAction<TeamType[]> ) =>{
            const data = action.payload
            state.teams = data
        },
        setTeam: (state, action:PayloadAction<TeamType> ) =>{
            const data = action.payload
            state.team = data
        },
       
    }
})


export const { setTeams, setTeam } = teamSlice.actions
export default teamSlice.reducer