import { ChangeEvent, FormEvent, forwardRef, useEffect, useMemo, useState } from "react";
import axios from "axios";

import { successNotification } from "../utilities/utilities";
import useUplStore from "../../zustand/uplStore";

import { FixtureType } from "../../zustand/api/api";
type CreateFixtureProps = {};
const CreateFixture = forwardRef((CreateFixtureProps, ref) => {
  const setFixtures = useUplStore(state => state.setFixtures)
  const [data, setData] = useState<FixtureType[]>([])
  const [homeTeam, setHomeTeam] = useState(0);
  const [awayTeam, setAwayTeam] = useState(0);
  const [gameWeek, setGameWeek] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [stadium, setStadium] = useState("");
  // const [season, setSeason] = useState("2023/2024")

  const season = "2023/2024";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const data = {
      homeTeam,
      awayTeam,
      gameWeek,
      season,
      date,
      time,
      stadium,
    };
    console.log("Data: ", data);

    try {
      const url = "http://localhost:8000/api/fixtures";
      const response = await axios.post(
        url,
        {
          homeTeam,
          awayTeam,
          gameWeek,
          season,
          date,
          time,
          stadium,
        },
        {
          headers: {
            'Accept': "application/json",
          },
        }
      );
      if (response.status == 200) {
        successNotification(response.data.message);
        setFixtures(response.data.fixtures)
        // setData(response.data.fixtures)
        ref?.current?.close();
      }


      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //  useEffect(() => {
  //    setFixtures(data);
  //  }, []);

  return (
    <div className="py-2" style={{ width: 500, height: 420 }}>
      <p className="text-center">Create a fixture here</p>

      <form className="py-4 relative" onSubmit={(e) => handleSubmit(e)}>
        <button
          type="button"
          className="bg-red-400 w-5 h-5 text-white text-center rounded-full outline-none absolute right-0 -top-5"
          onClick={() => ref.current?.close()}
        >
          X
        </button>
        <div className="grid grid-cols-12 gap-2 mb-2">
          <div className="col-span-6">
            <label>Game Week</label>
            <input
              type="text"
              className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"
              value={gameWeek}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setGameWeek(+e.target.value)
              }
            />
          </div>
          <div className="col-span-6">
            <label>Season</label>
            <input
              type="text"
              className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"
              value={season}
              disabled
              //  onChange={(e: ChangeEvent<HTMLInputElement>)=> setSeason(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mb-2">
          <div className="col-span-6">
            <label>Home team</label>
            <input
              type="text"
              className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"
              value={homeTeam}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setHomeTeam(+e.target.value)
              }
            />
          </div>
          <div className="col-span-6">
            <label>Away team</label>
            <input
              type="text"
              className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"
              value={awayTeam}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAwayTeam(+e.target.value)
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mb-2">
          <div className="col-span-12">
            <label>Stadium</label>
            <input
              type="text"
              className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"
              value={stadium}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setStadium(e.target.value)
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-6">
            <label>Kickoff</label>
            <input
              type="time"
              className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"
              value={time}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTime(e.target.value)
              }
            />
          </div>
          <div className="col-span-6">
            <label>Date</label>
            <input
              type="date"
              className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"
              value={date}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDate(e.target.value)
              }
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 mb-2">
          <button
            type="submit"
            className="w-full px-5 py-2 text-white text-center bg-blue-600 rounded"
          >
            Create Fixture
          </button>
        </div>
      </form>
    </div>
  );
});

export default CreateFixture;
