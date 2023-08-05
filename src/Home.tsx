import { useQuery } from "@tanstack/react-query";
import Register from "./components/Register";
import { Player, fetchPlayers } from "./zustand/api/api";
import { useEffect, useMemo } from "react";
import useUplStore from "./zustand/uplStore";

const Home = () => {
  const setPlayers = useUplStore(state => state.setPlayers)
    const { data: players, isSuccess: loadedPlayers } = useQuery({
      queryKey: ["players"],
      queryFn: fetchPlayers,
    });

    let realPlayers: Player[] = []
    
    if(loadedPlayers){
      realPlayers = players
    }
    console.log("Players: ", realPlayers)

    useMemo(()=>{
      setPlayers(realPlayers)
    }, [])


  return (
    <div>
      <header className="bg-blue-500 py-3 px-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img />
            <h1 className="text-orange-500 text-xl ml-2">
              Fantasy Uganda Premier League
            </h1>
          </div>
          <div className="flex items-center">
            <a href="/login" className="text-white font-semibold mr-4">
              Login
            </a>
            <a
              href="/register"
              className="bg-white text-blue-400 font-semibold py-2 px-4 rounded-lg"
            >
              Register
            </a>
          </div>
        </div>
      </header>

      <div className="landing_page flex justify-center items-center">
        <div className="">
          <p>Register to Play Fantasy Uganda Premier League.</p>
          <Register />
          {/* <p>
            Fantasy Premier League is the biggest Fantasy Football game in the
            world. It’s FREE to play and you can win great prizes!
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
