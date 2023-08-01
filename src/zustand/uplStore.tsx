import { create } from "zustand";
import { persist } from "zustand/middleware";

type Team = {
  name: string;
  // city: string[]
};

type UplStore = {
  teams: Team[];
  setTeams: (team: Team[]) => void;
};

const useUplStore = create<UplStore>()(
  persist(
    (set) => ({
      teams: [],
      setTeams: (_teams: Team[]) => {
        set({ teams: _teams });
      },
    }),
    {
      name: "gig-store",
    }
  )
);
