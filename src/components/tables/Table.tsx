import { useEffect, useState } from "react";
import axios from "axios";
const Table = () => {
  const url = "http://127.0.0.1:8000/api/table";
  const [table, setTable] = useState([]);
  const fetchTable = async () => {
    try {
      const response = await axios.get(url);
      setTable(response.data.table);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchTable();
  }, []);
  return (
    <div>
      <div>Page to display current league table</div>
      <table className="w-full border-2 border-b-gray-400">
        <thead className="bg-gray-50 bottom-2 border-gray-200">
          <tr>
            <th className=" w-10 p-2 text-sm font-semibold tracking-wide text-left">
              Position.
            </th>
            <th className=" w-50 p-2 text-sm font-semibold tracking-wide text-left">
              Team
            </th>
            <th className=" w-15 p-2 text-sm font-semibold tracking-wide text-left">
              Played
            </th>
            <th className=" w-10 p-2 text-sm font-semibold tracking-wide text-left">
              Won
            </th>
            <th className=" w-30 p-2 text-sm font-semibold tracking-wide text-left">
              Drawn
            </th>
            <th className=" w-30 p-2 text-sm font-semibold tracking-wide text-left">
              Lost
            </th>
            <th className=" w-30 p-2 text-sm font-semibold tracking-wide text-left">
              GF
            </th>
            <th className=" w-30 p-2 text-sm font-semibold tracking-wide text-left">
              GA
            </th>
            <th className=" w-30 p-2 text-sm font-semibold tracking-wide text-left">
              GD
            </th>
            <th className=" w-30 p-2 text-sm font-semibold tracking-wide text-left">
              Points
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-400">
            {table?.map((team: any) => (
              <tr key={team.id}>
                <td className="p-2 text-sm text-gray-700 ">{team.position}</td>
                <td className="p-2 text-sm text-gray-700 ">{team.team}</td>
                <td className="p-2 text-sm text-gray-700 ">{team.played}</td>
                <td className="p-2 text-sm text-gray-700 ">{team.won}</td>
                <td className="p-2 text-sm text-gray-700 ">{team.drawn}</td>
                <td className="p-2 text-sm text-gray-700 ">{team.lost}</td>
                <td className="p-2 text-sm text-gray-700 ">{team.goals_for}</td>
                 <td className="p-2 text-sm text-gray-700 ">{team.goals_against}</td>
                 <td className="p-2 text-sm text-gray-700 ">{team.goal_difference}</td>
                <td className="p-2 text-sm text-gray-700 ">{team.points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
