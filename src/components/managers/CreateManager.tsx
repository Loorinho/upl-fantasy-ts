import { FormEvent, forwardRef, useState } from "react";
import useUplStore from "../../zustand/uplStore";

import axios from 'axios'
type CreateManagerProps = {};

const CreateManager = forwardRef<HTMLDialogElement, CreateManagerProps>((CreateManagerProps,ref) => {

  const teams = useUplStore((state) => state.teams);
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [team, setTeam] = useState(teams[0].id);

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    try{
      const url = "http://localhost:8000/api/managers"
      const response = await axios.post(url, { firstName,lastName,age,teamId: team } ,{
        headers: { "Accept": "application/json"}
      })
      console.log(response.data)

      ref?.current?.close()
    }catch(error){console.error(error)}
  }
  return (
    <div>
      <form
        style={{ width: "500px" }}
        className="rounded-md p-1 relative"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p ref={ref}className="w-5 h-5 bg-red-600 text-white absolute right-1 cursor-pointer rounded-full text-center"
        onClick={() => ref?.current?.close()}
        >X</p>
        <p className="text-center py-4">Create a manager</p>

        <div className="grid grid-cols-8 gap-2 mb-2">
          <div className="col-span-4">
            <label className="text-gray-600 block text-sm">First name</label>

            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLastName(e.target.value)
              }
              className="px-3 py-1.5 w-full rounded-sm border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-8 gap-2 mb-3">
          <div className="col-span-3">
            <label className="text-gray-600 block text-sm">Team</label>
            <select
              className="px-3 py-1.5 w-full rounded-sm border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setTeam(+e.target.value)
              }
            >
              {teams.map((team: any) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2">
            <label className="text-gray-600 block text-sm">Age</label>
            <input
              type="number"
              name="age"
              value={age}
              className="px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAge(+e.target.value)
              }
            />
          </div>
        </div>

        <div className="flex justify-center items-center my-3">
          <button
            type="submit"
            className="bg-blue-600 rounded text-white px-3 py-2 w-full"
          >
            Create manager
          </button>
        </div>
      </form>
    </div>
  );
});

export default CreateManager;
