import { useQuery } from "@tanstack/react-query";
import { Player, fetchPlayers } from "../../zustand/api/api";
const Players = () => {
  const { data: players, isLoading } = useQuery({
    queryKey: ["lecturers"],
    queryFn: fetchPlayers,
  });
  return (
    <div>
      <table className="table-auto w-90 ">
        <thead>
          <tr className="px-2 py-2 bg-gray-400">
            <th>Name</th>
            <th>Shirt No.</th>
            <th>Position</th>
            <th>Foot</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {players?.map((player: Player) => (
            <tr key={player.id} className="text-center border-2 border-black">
              <td>
                {player.first_name} {player.last_name}
              </td>
              <td className="text-center">{player.shirt_number}</td>
              <td className="text-center">{player.position}</td>
              <td className="text-center">{player.foot}</td>
              <td className="text-center">{player.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Players;
