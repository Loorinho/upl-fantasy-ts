import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Manager, Player, Team, FixtureType } from "./api/api";

type UplStore = {
  teams: Team[];
  setTeams: (team: Team[]) => void;
  players: Player[];
  setPlayers: (team: Player[]) => void;
  managers: Manager[];
  setManagers: (managers: Manager[]) => void;
  fixtures: FixtureType[];
  setFixtures: (fixtures: FixtureType[]) => void;
};

const useUplStore = create<UplStore>()(
  persist(
    (set) => ({
      teams: [],
      players: [],
      managers: [],
      fixtures: [],
      setTeams: (_teams: Team[]) => {
        const allteams = _teams?.map((team) => {
          return {
            id: team.id,
            name: team.name,
            city: team.city,
            country: team.country,
            players: team.players,
          };
        });
        set({ teams: allteams });
      },
      setPlayers: (_players: Player[]) => {
        const allPlayers = _players?.map((player) => {
          return {
            id: player.id,
            first_name: player.first_name,
            last_name: player.last_name,
            foot: player.foot,
            position: player.position,
            age: player.age,
            shirt_number: player.shirt_number,
          };
        });
        set({ players: allPlayers });
      },
      setManagers: (_managers: Manager[]) => {
        const allManagers = _managers?.map((manager) => {
          return {
            id: manager.id,
            first_name: manager.first_name,
            last_name: manager.last_name,
            team: manager?.team,
            age: manager.age,
          };
        });
        set({ managers: allManagers });
      },
      setFixtures: (_fixtures: FixtureType[]) => {
        const allFixtures: FixtureType[] = _fixtures?.map((fixture) => {
          return {
            id: fixture.id,
            homeTeam: fixture.homeTeam,
            awayTeam: fixture.awayTeam,
            season: fixture?.season,
            date: fixture.date,
            time: fixture.time,
            stadium: fixture.stadium,
          };
        });
        set({ fixtures: allFixtures });
      },
    }),
    {
      name: "upl-store",
    }
  )
);

export default useUplStore;
