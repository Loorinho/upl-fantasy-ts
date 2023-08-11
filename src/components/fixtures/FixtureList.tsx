import axios from 'axios';
const FixturesList = () => {
  const [fixtures, setFixtures] = useState([])
  const fetchFixtures = async () => {
    const url = "http://127.0.0.1:8000/api/fixtures";
  try{
    const response = await axios.get(url)
    setFixtures(response.data?.fixtures)
    console.log(response.data)
  }catch(error){
    console.error(error)
  }
  }
  useEffect(() => {
    fetchFixtures()
    
  }, [])
  return (
    <div className="mt-5">
      {
        fixtures?.map((fixture: any) => (
         <div key={fixture.id} className="text-center">
             <p><span className="mr-3">{fixture.home_team}</span> <span className="mr-3">{fixture.time}</span> <span>{fixture.away_team}</span></p>       
         </div> 
        ))
      }
    </div>
  )
}

export default FixturesList
