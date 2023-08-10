import axios from 'axios';
const FixturesList = () => {
  const fetchFixtures = async () => {
    const url = "http://127.0.0.1:8000/api/fixtures";
  try{
    const response = await axios.get(url)
    console.log(response.data)
  }catch(error){
    console.error(error)
  }
  }
  useEffect(() => {
    fetchFixtures()
  }, [])
  return (
    <div>Fixtures list</div>
  )
}

export default FixturesList
