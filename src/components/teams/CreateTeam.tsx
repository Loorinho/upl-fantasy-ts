import { forwardRef } from 'react'
type CreateTeamProps = {}
const CreateTeam = forwardRef<HTMLDialogElement, CreateTeamProps>(({}, ref) => {
  return <div>
   <form
        style={{ width: "500px" }}
        className="rounded-md p-1 relative"
        // onSubmit={(e: React.ChangeEvent<HTMLSelectElement>) => handleSubmit}
      >
        <p className="w-5 h-5 bg-red-600 text-white absolute right-1 cursor-pointer rounded-full text-center"
        onClick={() => ref?.current?.close()}
        >X</p>
        <p className="text-center py-4">Create a team</p>
     </form>
  </div>;
});

export default CreateTeam;
