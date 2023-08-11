export type Fixture = {
  id: number,
  home_team: string,
  away_team: string,
  time: string
}
export type FixtureProps = {
  fixture: Fixture
}
const Fixture = ({fixture}: FixtureProps ) => {
  return (
     <div key={fixture.id} className="text-center">
        <p><span className="mr-3">Team {fixture.home_team}</span> <span className="mr-3">{fixture.time}</span> <span>Team {fixture.away_team}</span></p>       
     </div> 
  )
}

export default Fixture
