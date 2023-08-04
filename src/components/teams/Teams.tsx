import { useQuery } from "@tanstack/react-query";
import { fetchTeams } from "../../zustand/api/api";

const Teams = () => {
  const { data: teams, isLoading } = useQuery({
    queryKey: ["teams"],
    queryFn: fetchTeams,
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {teams?.map((team: any) => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.city}</td>
              <td>{team.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;
