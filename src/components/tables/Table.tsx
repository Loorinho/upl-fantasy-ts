const Table = () => {
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
{/*             {players?.map((player: Player, index) => (
              <tr key={player.id}>
                <td className="p-2 text-sm text-gray-700 ">{index + 1}</td>
                <td className="p-2 text-sm text-gray-700 ">
                  {player.first_name} {player.last_name}
                </td>
                <td className="p-2 text-sm text-gray-700 ">
                  {player.shirt_number}
                </td>
                <td className="p-2 text-sm text-gray-700 ">{player.age}</td>
                <td className="p-2 text-sm text-gray-700 ">
                  {player.position}
                </td>
                <td className="p-2 text-sm text-gray-700 ">{player.foot}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
    </div>
  )
}

export default Table