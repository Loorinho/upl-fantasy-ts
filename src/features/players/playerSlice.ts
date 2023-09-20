import { PayloadAction, createSlice } from "@reduxjs/toolkit"


type PlayerType = {
    id: number,
    firstName: string,
    lastName: string,
    position: string,
    foot: string,
    team?: number
}

type InitialState = {
    player: PlayerType,
    players: PlayerType[]
}

const initialState: InitialState = {
    player: {} as PlayerType,
    players: []

}
export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setPlayers: (state, action:PayloadAction<PlayerType[]> ) =>{
            const data = action.payload
            state.players = data
        },
        setPlayer: (state, action:PayloadAction<PlayerType> ) =>{
            const data = action.payload
            state.player = data
        },
       
    }
})


export const { setPlayers, setPlayer } = playerSlice.actions
export default playerSlice.reducer