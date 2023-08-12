import { FixtureType } from "../../zustand/api/api";

export type FixtureProps = {
  fixture: FixtureType;
};
const Fixture = ({fixture}: FixtureProps ) => {
  console.log(fixture)
  return (
     <div key={fixture.id} className="text-center">
        <p><span className="mr-3">Team {fixture.homeTeam}</span> <span className="mr-3">{fixture.time}</span> <span>Team {fixture.awayTeam}</span></p>       
     </div> 
  )
}

export default Fixture
