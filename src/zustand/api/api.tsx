import axios from "axios";
import { TeamType } from "../../features/teams/teamSlice";
import { ManagerType, setManagers } from "../../features/managers/managerSlice";
import { useAppDispatch } from "../../store/hooks";

export type Player = {
  id: number;
  firstName: string;
  lastName: string;
  shirtNumber: number;
  position: string;
  foot: string;
  age: number;
};

export type FixtureType = {
  id: number;
  season: string;
  homeTeam: number;
  awayTeam: number;
  stadium: string;
  date: string;
  time: string;
};

// export type Team = {
//   id: number;
//   name: string;
//   city: string;
//   country: string;
//   players: Player[];
// };

// /

export const fetchPlayers = async () => {
  const url = "http://localhost:8012/api/v1/players";
  const response = await axios.get(url);
  const players: Player[] = response.data.players.map((player: Player) => {
    return {
      id: player.id,
      first_name: player.firstName,
      last_name: player.lastName,
      position: player.position,
      shirt_number: player.shirtNumber,
      foot: player.foot,
      age: player.age,
    };
  });

  return players;
};

export const fetchTeams = async () => {
  const url = "http://localhost:8081/api/v1/teams";
  const response = await axios.get(url);
  // const teams: Team[] = response.data?.teams.map((team: Team) => {
  const teams: TeamType[] = response.data?.teams.map((team: TeamType) => {
// 
    return {
      id: team.id,
      name: team.name,
      city: team.city,
      // country: team.country,
      // players: team.players,
    };
  });

  return teams;
};

export const fetchManagers = async () => {
  // const dispatch = useAppDispatch();
  const url = "http://localhost:8081/api/v1/managers";
  const response = await axios.get(url);
  const managers: ManagerType[] = response.data?.managers.map(
    (manager: ManagerType) => {
      return {
        id: manager.id,
        firstName: manager.firstName,
        lastName: manager.lastName,
        age: manager.age,
        // team: manager.team?.name,
      };
    }
  );
  // dispatch(setManagers(managers))

  return managers;
};

export const createManager = async (data: any) => {
  const url = "http://127.0.0.1:8000/api/managers";
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data.message;
};

export const fetchFixtures = async () => {
  const url = "http://127.0.0.1:8000/api/fixtures";
  const response = await axios.get(url);
  const fixtures: FixtureType[] = response.data?.fixtures.map(
    (fixture: any) => {
      return {
        id: fixture.id,
        homeTeam: fixture.home_team,
        awayTeam: fixture.away_team,
        season: fixture.season,
        date: fixture.date,
        time: fixture.time,
        stadium: fixture.stadium,
      };
    }
  );
  // let myFixtures: Fixture[] = fixtures
  return fixtures;
};

export const createFixture = async (data: any) => {
  const url = "http://127.0.0.1:8000/api/fixtures";
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
