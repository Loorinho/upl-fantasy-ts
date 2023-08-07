import useUplStore from "../../zustand/uplStore";
import CreateTeam from "./CreateTeam"

const Teams = () => {
  const teams = useUplStore((state) => state.teams);
  return (
    <div style={{ width: "500px" }}>
      <button className="bg-blue-700 text-white px-4 py-2 m-2">
      Create Team
      </button>
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

      <dialog>
        <CreateTeam />
      </dialog>        
    </div>
  );
};

export default Teams;
