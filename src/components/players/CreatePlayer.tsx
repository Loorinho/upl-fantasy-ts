import { useState, forwardRef, FormEvent } from "react";
import useUplStore from "../../zustand/uplStore";
import axios from "axios";
import { Player } from "../../zustand/api/api";

type CreatePlayerProps = {
  closeModal: () => void;
};
const CreatePlayer = forwardRef<HTMLDialogElement, CreatePlayerProps>(
  ({ closeModal }, ref) => {
    const teams = useUplStore((state) => state.teams);
    const setPlayers = useUplStore((state) => state.setPlayers);

    const playerfoot = ["Left", "Right", "Both"];
    const playerposition = [
      "Center Forward",
      "Defensive Midfielder",
      "Attacking Midfielder",
      "Goal Keeper",
      "Left Back",
      "Right Back",
      "Left Winger",
      "Right Winger",
      "Left Center Back",
      "Right Center Back",
    ];

    const [player, setPlayer] = useState({
      firstName: "",
      lastName: "",
      age: 0,
      shirtNumber: 0,
      position: "",
      foot: "",
      team: 0,
    });

    const handlePlayer = (e: any) => {
      setPlayer({
        ...player,
        [e.target.name]: e.target.value,
      });
    };

    // console.log("Player state: ", {
    //   ...player,
    //   age: +player.age,
    //   shirtNumber: +player.shirtNumber,
    //   team: +player.team,
    // });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const url = "http://127.0.0.1:8000/api/players";
        const response = await axios.post(
          url,
          {
            ...player,
            age: +player.age,
            shirtNumber: +player.shirtNumber,
            teamId: +player.team,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data) {
          // ref.current?.close();
          closeModal();
          const newplayers: Player[] = response.data?.players.map(
            (player: Player) => {
              return {
                id: player.id,
                first_name: player.first_name,
                last_name: player.last_name,
                shirt_number: player.shirt_number,
                position: player.position,
                foot: player.foot,
                age: player.age,
              };
            }
          );
          setPlayers(newplayers);
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div className="">
        <form
          style={{ width: "500px" }}
          className="rounded-md p-1"
          onSubmit={(e) => handleSubmit(e)}
        >
          <p
            className="absolute right-3 rounded-full text-center bg-red-600 h-5 w-5 text-white cursor-pointer"
            onClick={closeModal}
          >
            X
          </p>
          <p className="text-center py-4">Create a player</p>

          <div className="grid grid-cols-8 gap-2 mb-2">
            <div className="col-span-4">
              <label className="text-gray-600 block text-sm">First name</label>

              <input
                type="text"
                name="firstName"
                value={player.firstName}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //   setfirstName(e.target.value)
                // }
                onChange={handlePlayer}
                className="px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
            </div>
            <div className="col-span-4">
              <label className="text-gray-600 block text-sm">Last name</label>

              <input
                type="text"
                name="lastName"
                value={player.lastName}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //   setLastName(e.target.value)
                // }
                onChange={handlePlayer}
                className="px-3 py-1.5 w-full rounded-sm border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-8 gap-2 mb-3">
            <div className="col-span-3">
              <label className="text-gray-600 block text-sm">
                Shirt number
              </label>
              <input
                type="number"
                name="shirtNumber"
                value={player.shirtNumber}
                className="px-3 py-1.5 w-full rounded-sm border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //   setShirtNumber(+e.target.value)
                // }
                onChange={handlePlayer}
              />
            </div>
            <div className="col-span-2">
              <label className="text-gray-600 block text-sm">Age</label>
              <input
                type="number"
                name="age"
                value={player.age}
                className="px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //   setAge(+e.target.value)
                // }
                onChange={handlePlayer}
              />
            </div>
            <div className="col-span-3">
              <label className="text-gray-600 block text-sm">Foot</label>
              <select
                name="foot"
                className="bg-white px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                // onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                //   setFoot(e.target.value)
                // }
                onChange={handlePlayer}
              >
                {playerfoot?.map((f) => (
                  <option value={f} key={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-2">
            <div className="col-span-4">
              <label className="text-gray-600 block text-sm">Position</label>
              <select
                name="position"
                className="bg-white px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                // onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                //   setPosition(e.target.value)
                // }
                onChange={handlePlayer}
              >
                {playerposition?.map((position) => (
                  <option
                    value={position}
                    key={position}
                    //   className=" bg-white px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                  >
                    {position}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-4">
              <label className="text-gray-600 block text-sm">Team</label>
              <select
                name="team"
                className=" bg-white px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                // onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                //   setTeam(+e.target.value)
                // }
                onChange={handlePlayer}
              >
                {teams?.map((team) => (
                  <option
                    value={team.id}
                    key={team.id}
                    className="px-3 py-1.5 "
                  >
                    {team.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center items-center my-3">
            <button
              type="submit"
              className="bg-blue-600 rounded text-white px-3 py-2 w-full"
            >
              Create player
            </button>
          </div>
        </form>
      </div>
    );
  }
);

export default CreatePlayer;
