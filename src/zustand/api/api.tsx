import axios from "axios";

export type Player = {
  id: number;
  first_name: string;
  last_name: string;
  shirt_number: number;
  position: string;
  foot: string;
  age: number;
};

export type Team = {
  id: number;
  name: string;
  city: string;
  country: string;
  players: Player[];
};

export type Manager = {
  id: number;
  first_name: string;
  last_name: string;
  age: string;
  team: Team;
};

export const fetchPlayers = async () => {
  const url = "http://127.0.0.1:8000/api/players";
  const response = await axios.get(url);
  const players: Player[] = response.data.players.map((player: Player) => {
    return {
      id: player.id,
      first_name: player.first_name,
      last_name: player.last_name,
      position: player.position,
      shirt_number: player.shirt_number,
      foot: player.foot,
      age: player.age,
    };
  });

  return players;
};

export const fetchTeams = async () => {
  const url = "http://127.0.0.1:8000/api/teams";
  const response = await axios.get(url);
  const teams: Player[] = response.data.teams.map((team: Team) => {
    return {
      id: team.id,
      name: team.name,
      city: team.city,
      country: team.country,
      players: team.players,
    };
  });

  return teams;
};

export const fetchManagers = async () => {
  const url = "http://127.0.0.1:8000/api/managers";
  const response = await axios.get(url);
  const managers: Manager[] = response.data?.managers.map(
    (manager: Manager) => {
      return {
        id: manager.id,
        first_name: manager.first_name,
        last_name: manager.last_name,
        age: manager.age,
        team: manager.team?.name,
      };
    }
  );

  return managers;
};
