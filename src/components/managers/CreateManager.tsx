import { useRef, useState } from "react";
import useUplStore from "../../zustand/uplStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createManager } from "../../zustand/api/api";
import { toast } from "react-toastify";

const CreateManager = () => {
  const modal = document.querySelector("#manager-dialog") as HTMLDialogElement;
//   const managerRef = useRef<HTMLDialogElement>(null);

//   console.log(managerRef.current);
  const notify = async (message: string) => {
    await toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log("Notification done")
     modal?.close();
  };
  // console.log(modal)
  const queryClient = useQueryClient();

  const teams = useUplStore((state) => state.teams);
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [team, setTeam] = useState(teams[0]);

  const { mutate: addManager, data } = useMutation(createManager, {
    onSuccess: () => {
      notify(data);
     
      queryClient.invalidateQueries(["managers"]);
    },
  });

  async function handleSubmit(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    // console.log("submitted manager");

    const manager = {
      firstName,
      lastName,
      age,
      teamId: 1,
    };

    addManager({
      firstName,
      lastName,
      age,
      teamId: 1,
    });
  }

  return (
    <div>
      <form
        style={{ width: "500px" }}
        className="rounded-md p-1"
        // onSubmit={(e: React.ChangeEvent<HTMLSelectElement>) => handleSubmit}
      >
        <p className="text-center py-4">Create a manager</p>

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
            <label className="text-gray-600 block text-sm">Team</label>
            {/* <select name="" id="">

            </select> */}
            <input
              type="text"
              name="team"
              value={team.id}
              className="px-3 py-1.5 w-full rounded-sm border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setTeam(e.target.value)
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
        </div>

        <div className="flex justify-center items-center my-3">
          <button
            // type="submit"
            className="bg-blue-600 rounded text-white px-3 py-2 w-full"
            onClick={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleSubmit(e)
            }
          >
            Create manager
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateManager;
