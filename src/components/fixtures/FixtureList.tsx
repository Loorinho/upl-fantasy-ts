import axios from "axios";
import Fixture, { FixtureType } from "./Fixture";
import { useEffect, useState, useRef } from "react";
const FixturesList = () => {
  const fixtureRef = useRef<HTMLDialogElement>(null);
  const [fixtures, setFixtures] = useState([]);

  const fetchFixtures = async () => {
    const url = "http://127.0.0.1:8000/api/fixtures";
    try {
      const response = await axios.get(url);
      setFixtures(response.data?.fixtures);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchFixtures();
  }, []);
  return (
    <div className="mt-5">
      <button className="px-5 py-2 bg-blue-600 text-white rounded">
        Create Fixture
      </button>
      <div className="mt-5">
        {fixtures?.map((fixture: FixtureType) => (
          <div key={fixture.id}>
            <Fixture fixture={fixture} />
          </div>
        ))}
      </div>

      <dialog ref={fixtureRef}>
        <div>Create fixture </div>
      </dialog>
    </div>
  );
};

export default FixturesList;
