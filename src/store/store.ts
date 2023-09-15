import { configureStore, combineReducers } from "@reduxjs/toolkit";
import PlayerReducer from "../features/players/playerSlice";
import ManagerReducer from "../features/managers/managerSlice";
import TeamReducer from "../features/teams/teamSlice";

import storage from "redux-persist/lib/storage";
import {persistReducer, FLUSH, PERSIST, PAUSE, REGISTER, REHYDRATE, PURGE} from 'redux-persist'



const persistConfiguration = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    player: PlayerReducer,
    manager: TeamReducer,
    team: TeamReducer
})

const persistedReducer = persistReducer(persistConfiguration, reducer)

export const store = configureStore({
    reducer: persistedReducer,
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store