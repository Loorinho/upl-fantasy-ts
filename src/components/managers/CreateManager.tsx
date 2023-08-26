import { FormEvent, forwardRef, useState } from "react";
import useUplStore from "../../zustand/uplStore";
import { successNotification } from "../utilities/utilities";

import axios from "axios";
type CreateManagerProps = {
  closeModal: () => void;
};

const CreateManager = forwardRef<HTMLDialogElement, CreateManagerProps>(
  ({ closeModal }, ref) => {
    const teams = useUplStore((state) => state.teams);
    const setManagers = useUplStore((state) => state.setManagers);
    // const [firstName, setfirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [age, setAge] = useState(0);
    // const [team, setTeam] = useState(teams[0].id);

    // Manager state
    const [manager, setManager] = useState({
      firstName: "",
      lastName: "",
      age: 0,
      teamId: teams[0].id,
    });

    // To handle the input change
    const handleChange = (e: any) => {
      setManager({
        ...manager,
        [e.target.name]: e.target.value,
      });
    };

    const managerSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // console.log("Manager: ", { ...manager, age: +manager.age });
        try {
          const url = "http://localhost:8000/api/managers";
          const response = await axios.post(
            url,
           { ...manager, age: +manager.age},
            {
              headers: { Accept: "application/json" },
            }
          );
          const managersData = response.data?.managers.map((manager: any) => {
            return {
              id: manager.id,
              first_name: manager.first_name,
              last_name: manager.last_name,
              team: manager?.team,
              age: manager.age,
            };
          });

          setManagers(managersData);

          // console.log(response.data);

          // ref?.current?.close();
          closeModal();
          successNotification(response.data.message);
          // console.log("Response:", response.data)
        } catch (error) {
          console.error(error);
        }
      };
    

    // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();

    //   try {
    //     const url = "http://localhost:8000/api/managers";
    //     const response = await axios.post(
    //       url,
    //       { firstName, lastName, age, teamId: team },
    //       {
    //         headers: { Accept: "application/json" },
    //       }
    //     );
    //     console.log(response.data);

    //     ref?.current?.close();
    //     successNotification(response.data.message);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    return (
      <div>
        <form
          style={{ width: "500px" }}
          className="rounded-md p-1 relative"
          onSubmit={managerSubmit}
        >
          <p
            className="w-5 h-5 bg-red-600 text-white absolute right-1 cursor-pointer rounded-full text-center"
            // onClick={() => ref?.current?.close()}
            onClick={closeModal}
          >
            X
          </p>
          <p className="text-center py-4">Create a manager</p>

          <div className="grid grid-cols-8 gap-2 mb-2">
            <div className="col-span-4">
              <label className="text-gray-600 block text-sm">First name</label>

              <input
                type="text"
                name="firstName"
                // value={firstName}
                value={manager.firstName}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //   setfirstName(e.target.value)
                // }
                onChange={handleChange}
                className="px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
            </div>
            <div className="col-span-4">
              <label className="text-gray-600 block text-sm">Last name</label>

              <input
                type="text"
                name="lastName"
                value={manager.lastName}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //   setLastName(e.target.value)
                // }
                onChange={handleChange}
                className="px-3 py-1.5 w-full rounded-sm border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-8 gap-2 mb-3">
            <div className="col-span-3">
              <label className="text-gray-600 block text-sm">Team</label>
              <select
                className="px-3 py-1.5 w-full rounded-sm border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                // onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                //   setTeam(+e.target.value)
                // }
                onChange={handleChange}
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
                value={manager.age}
                className="px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //   setAge(+e.target.value)
                // }
                onChange={handleChange}
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
  }
);

export default CreateManager;
