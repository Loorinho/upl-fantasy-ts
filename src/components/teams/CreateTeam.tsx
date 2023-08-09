import { forwardRef, useState } from 'react'
type CreateTeamProps = {}
const CreateTeam = forwardRef<HTMLDialogElement, CreateTeamProps>(({}, ref) => {

  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  return <div className="px-4 py-2">
   <form
        style={{ width: "450px" }}
        className="p-1 relative"
        // onSubmit={(e: React.ChangeEvent<HTMLSelectElement>) => handleSubmit}
      >
        <p className="w-5 h-5 bg-red-600 text-white absolute right-1 cursor-pointer rounded-full text-center"
        onClick={() => ref?.current?.close()}
        >X</p>
        <p className="text-center py-4">Create a team</p>

          <div className="mt-2">
              <label className="text-gray-600 block text-sm">Team name</label>
              <input
                type="text"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                className="px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
            </div>
            <div className="mt-2">
              <label className="text-gray-600 block text-sm">Last name</label>
              <input
                type="text"
                value={city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCity(e.target.value)
                }
                className="px-3 py-1.5 w-full rounded-sm border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
            </div>

         <div className="flex justify-center items-center my-3">
            <button
              type="button"
              className="bg-blue-600 rounded text-white px-3 py-2 w-full"
             // onClick={() => handleSubmit()}
            >
              Create team
            </button>
          </div>
     </form>
  </div>;
});

export default CreateTeam;
