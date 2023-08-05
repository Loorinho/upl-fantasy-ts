import { useState } from "react";
import useUplStore from "../../zustand/uplStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePlayer = () => {
  const mymodal = document.querySelector(".dialog") as HTMLDialogElement;

  const navigate = useNavigate();
  const teams = useUplStore((state) => state.teams);

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

  const [team, setTeam] = useState(teams[0].id);
  const [position, setPosition] = useState(playerposition[0]);
  const [foot, setFoot] = useState(playerfoot[0]);

  const [age, setAge] = useState(0);
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [shirtNumber, setShirtNumber] = useState(0);

  async function handleSubmit(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();

    const player = {
      firstName,
      lastName,
      age,
      shirt_number: shirtNumber,
      position,
      foot,
      team,
    };
    // console.log("Player: ", player);

    try {
      const url = "http://127.0.0.1:8000/api/players";
      const response = await axios.post(
        url,
        {
          firstName,
          lastName,
          age,
          shirtNumber,
          position,
          foot,
          teamId: team,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        mymodal?.close();
      }

      navigate("/players");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form
        style={{ width: "500px" }}
        className="rounded-md p-1"
        // onSubmit={(e: React.ChangeEvent<HTMLSelectElement>) => handleSubmit}
      >
        <p className="text-center py-4">Create a player</p>

        <div className="grid grid-cols-8 gap-2 mb-2">
          <div className="col-span-4">
            <label className="text-gray-600 block text-sm">First name</label>

            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setfirstName(e.target.value)
              }
              className="px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
            />
          </div>
          <div className="col-span-4">
            <label className="text-gray-600 block text-sm">Last name</label>

            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setLastName(e.target.value)
              }
              className="px-3 py-1.5 w-full rounded-sm border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-8 gap-2 mb-3">
          <div className="col-span-3">
            <label className="text-gray-600 block text-sm">Shirt number</label>
            <input
              type="number"
              name="shirt_number"
              value={shirtNumber}
              className="px-3 py-1.5 w-full rounded-sm border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setShirtNumber(e.target.value)
              }
            />
          </div>
          <div className="col-span-2">
            <label className="text-gray-600 block text-sm">Age</label>
            <input
              type="number"
              name="age"
              value={age}
              className="px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setAge(e.target.value)
              }
            />
          </div>
          <div className="col-span-3">
            <label className="text-gray-600 block text-sm">Foot</label>
            <select
              name="foot"
              className="bg-white px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFoot(e.target.value)
              }
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
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setPosition(e.target.value)
              }
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
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setTeam(e.target.value)
              }
            >
              {teams?.map((team) => (
                <option value={team.id} key={team.id} className="px-3 py-1.5 ">
                  {team.name}
                </option>
              ))}
            </select>
            {/* <input
              type="text"
              name="player_name"
              className="px-3 py-1.5 w-full rounded-sm"
            /> */}
          </div>
        </div>

        <div className="flex justify-center items-center my-3">
          <button
            // type="submit"
            className="bg-blue-600 rounded text-white px-3 py-2 w-full"
            onClick={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleSubmit(e)
            }
          >
            Create player
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePlayer;
