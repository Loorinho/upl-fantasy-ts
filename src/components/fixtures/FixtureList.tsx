import axios from 'axios';
import Fixture from './Fixture'
import { useEffect, useState } from 'react';
const FixturesList = () => {
  const [fixtures, setFixtures] = useState([])
  const fetchFixtures = async () => {
    const url = "http://127.0.0.1:8000/api/fixtures";
  try{
    const response = await axios.get(url)
    setFixtures(response.data?.fixtures)
   
  }catch(error){
    console.error(error)
  }
  }
  useEffect(() => {
    fetchFixtures();
  }, []);
  return (
    <div className="mt-5">
      {
        fixtures?.map((fixture: any) => {
          <Fixture fixture={fixture} />
         // <div key={fixture.id} className="text-center">
         //     <p><span className="mr-3">Team {fixture.home_team}</span> <span className="mr-3">{fixture.time}</span> <span>Team {fixture.away_team}</span></p>       
         // </div> 
        })
      }
    </div>
  )
}

export default FixturesList;
