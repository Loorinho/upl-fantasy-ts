import { FormEvent, forwardRef, useState } from "react";
import axios from "axios";
import useUplStore from "../../zustand/uplStore";

import {useForm} from "react-hook-form";
import { TeamSchema, TeamSchemaType } from "../../features/zod/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { successNotification } from "../../utils/functions/notifications";


type CreateTeamProps = {
  closeModal: () => void;
};
const CreateTeam = forwardRef<HTMLDialogElement, CreateTeamProps>(
  ({closeModal}, ref) => {
    const setTeams = useUplStore((state) => state.setTeams);

   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm<TeamSchemaType>({
     resolver: zodResolver(TeamSchema),
   });

    const submitTeam = async (data: TeamSchemaType) => {
      // e.preventDefault();

      console.log("Data: ", data);

      try {
        const url = "http://localhost:8000/api/teams";
        const response = await axios.post(
          url,
          data,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        setTeams(response.data?.teams);
        // ref?.current?.close();
        closeModal();
        successNotification(response.data?.message);
      } catch (error) {
        console.error(error);
      }
    };

  
    return (
      <div className="px-4 py-2">
        <form
          style={{ width: "450px" }}
          className="p-1 relative"
          onSubmit={handleSubmit(submitTeam)}
        >
          <p
            className="w-5 h-5 bg-red-600 text-white absolute right-1 cursor-pointer rounded-full text-center"
            onClick={closeModal}
          >
            X
          </p>
          <p className="text-center py-4">Create a team</p>

          <div className="mt-2">
            <label className="text-gray-600 block text-sm">Team name</label>
            <input
              type="text"
              {...register("teamName")}
              className="px-3 py-1.5 w-full rounded-md border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
            />
            {errors.teamName && (
              <span className="text-red-500">{`${errors.teamName.message}`}</span>
            )}
          </div>
          <div className="mt-2">
            <label className="text-gray-600 block text-sm">City</label>
            <input
              type="text"
              {...register("city")}
              className="px-3 py-1.5 w-full rounded-sm border border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
            />
            {errors.city && (
              <span className="text-red-500">{`${errors.city.message}`}</span>
            )}
          </div>

          <div className="flex justify-center items-center my-3">
            <button
              type="submit"
              className="bg-blue-600 rounded text-white px-3 py-2 w-full"
            >
              Create team
            </button>
          </div>
        </form>
      </div>
    );
  }
);

export default CreateTeam;
