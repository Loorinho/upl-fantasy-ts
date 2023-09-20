// import { PayloadAction, createSlice } from "@reduxjs/toolkit"


// type TableType = {
//     id: number,
//     position: number,
//     team: string,
//     position: string,
   
// }

// type InitialState = {
//     // player: PlayerType,
//     // players: PlayerType[]
// }

// const initialState: InitialState = {
//     // player: {} as PlayerType,
//     // players: []

// }
// export const playerSlice = createSlice({
//     name: "player",
//     initialState,
//     reducers: {
//         setPlayers: (state, action:PayloadAction<TableType[]> ) =>{
//             const data = action.payload
//             state.players = data
//         },
//         setPlayer: (state, action:PayloadAction<TableType> ) =>{
//             const data = action.payload
//             state.player = data
//         },
       
//     }
// })


// export const { setPlayers, setPlayer } = playerSlice.actions
// export default playerSlice.reducer