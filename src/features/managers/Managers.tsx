import { useRef } from "react";
import CreateManager from "./CreateManager";
import useUplStore from "../../zustand/uplStore";

const Managers = () => {
  const managers = useUplStore((state) => state.managers);
  const managerRef = useRef<HTMLDialogElement>(null)!

  function showModal() {
    managerRef.current?.showModal();
  }
    // function showModal() {
    //   playerRef.current?.showModal();
    // }
    function closeModal() {
      managerRef.current?.close();
    }


  return (
    <>
      <div style={{ width: "500px" }}>
        <div className="m-4">
          <button
            className="px-4 py-1.5 rounded bg-blue-600 text-white outline-none"
            onClick={showModal}
          >
            Create Manager
          </button>
        </div>
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
                Age
              </th>
              <th className=" w-30 p-2 text-sm font-semibold tracking-wide text-left">
                Team
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-400">
            {managers?.map((manager: any, index) => (
              <tr key={manager.id}>
                <td className="p-2 text-sm text-gray-700 ">{index + 1}</td>

                <td className="p-2 text-sm text-gray-700 ">
                  {manager.first_name} {manager.last_name}
                </td>
                <td className="p-2 text-sm text-gray-700 ">{manager.age}</td>
                <td className="p-2 text-sm text-gray-700 ">{manager.team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog
        className="manager-dialog rounded-lg p-4"
        id="manager-dialog"
        ref={managerRef}
      >
        <CreateManager closeModal={closeModal} />
      </dialog>
    </>
  );
};

export default Managers;
