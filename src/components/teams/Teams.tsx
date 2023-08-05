import { useQuery } from "@tanstack/react-query";
import { Team, fetchTeams } from "../../zustand/api/api";
import useUplStore from "../../zustand/uplStore";
import { useEffect } from "react";

const Teams = () => {
  const {
    data: _teams,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["teams"],
    queryFn: fetchTeams,
  });

  let theTeams: Team[] = [];
  if (isSuccess) {
    theTeams = _teams;
  }

  const teams = useUplStore((state) => state.teams);
  const setTeams = useUplStore((state) => state.setTeams);

  useEffect(() => {
    setTeams(theTeams);
  }, []);

  return (
    <div style={{ width: "500px" }}>
      <table className="w-full border-2 border-b-gray-400">
        <thead className="bg-gray-50 bottom-2 border-gray-200">
          <tr>
            <th className=" w-10 p-2 text-sm font-semibold tracking-wide text-left">
              No.
            </th>
            <th className=" w-50 p-2 text-sm font-semibold tracking-wide text-left">
              Name
            </th>
            <th className=" w-10 p-2 text-sm font-semibold tracking-wide text-left">
              City
            </th>
            <th className=" w-30 p-2 text-sm font-semibold tracking-wide text-left">
              Country
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-400">
          {teams?.map((team: any, index) => (
            <tr key={team.id}>
              <td className="p-2 text-sm text-gray-700 ">{index + 1}</td>

              <td className="p-2 text-sm text-gray-700 ">{team.name}</td>
              <td className="p-2 text-sm text-gray-700 ">{team.city}</td>
              <td className="p-2 text-sm text-gray-700 ">{team.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;
