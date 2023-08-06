import { useQuery } from "@tanstack/react-query";
import Register from "./components/Register";
import { Player, Team, Manager, fetchPlayers, fetchTeams, fetchManagers } from "./zustand/api/api";
import { useMemo } from "react";
import useUplStore from "./zustand/uplStore";

const Home = () => {
  const setPlayers = useUplStore(state => state.setPlayers)
  const setTeams = useUplStore(state => state.setTeams)
  const setManagers = useUplStore(state => state.setManagers)
  
    const { data: players, isSuccess: loadedPlayers } = useQuery({
      queryKey: ["players"],
      queryFn: fetchPlayers,
    });
    const { data: teams, isSuccess: loadedTeams } = useQuery({
      queryKey: ["teams"],
      queryFn: fetchTeams,
    });

  const { data: managers, isSuccess: loadedManagers } = useQuery({
    queryKey: ["managers"],
    queryFn: fetchManagers,
  });
  
  let realTeams: Team[] = [];
  let realPlayers: Player[] = []
  let realManagers: Manager[] = []
  
  if(loadedPlayers && loadedTeams && loadedManagers){
    realPlayers = players
    realTeams = teams
    realManagers = managers
  }
  useMemo(() => {
    setPlayers(realPlayers);
    setTeams(realTeams);
    setManagers(realManagers)
  }, [realPlayers, realTeams, realManagers]);

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
