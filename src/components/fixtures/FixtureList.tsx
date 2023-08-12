import { useRef, useMemo } from "react";
import CreateFixture from "./CreateFixture";
import useUplStore from "../../zustand/uplStore";
import { FixtureType, fetchFixtures } from "../../zustand/api/api";
import { useQuery } from "@tanstack/react-query";
import Fixture from "./Fixture";
const FixturesList = () => {
  const fixtureRef = useRef<HTMLDialogElement>(null);
  // console.log(fixtureRef.current)
  // const [fixtures, setFixtures] = useState([]);

  const { data: myFixtures, isSuccess } = useQuery({
    queryKey: ["fixtures"],
    queryFn: fetchFixtures,
  });

  const fixtures = useUplStore((state) => state.fixtures);
  const setFixtures = useUplStore((state) => state.setFixtures);

  useMemo(() => {
    if (isSuccess) {
      setFixtures(myFixtures);
    }
  }, []);

  return (
    <div className="mt-5">
      <button
        className="px-5 py-2 bg-blue-600 text-white rounded outline-none"
        onClick={() => fixtureRef.current?.showModal()}
      >
        Create Fixture
      </button>
      <div className="mt-5">
        {fixtures?.map((fixture: FixtureType) => (
          <div key={fixture.id} className="text-center">
            <p>
              <span className="mr-3">Team {fixture.homeTeam}</span>
              <span className="mr-3">{fixture.time}</span>
              <span>Team {fixture.awayTeam}</span>
            </p>
          </div>
        ))}
      </div>

      <dialog ref={fixtureRef} className="fixture-dialog rounded-lg px-2">
        <CreateFixture ref={fixtureRef} />
      </dialog>
    </div>
  );
};

export default FixturesList;
