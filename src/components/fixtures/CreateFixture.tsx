import { ChangeEvent, forwardRef, useState } from 'react'
type CreateFixtureProps = {}
const CreateFixture = forwardRef((CreateFixtureProps, ref) => {

  const [homeTeam, setHomeTeam] = useState(0)
  const [awayTeam, setAwayTeam] = useState(0)
  const [gameWeek, setGameWeek] = useState(1)
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  // const [season, setSeason] = useState("2023/2024")

  const season = "2023/2024"

  return (
    <div className="rounded-lg p-2" style={{width: 500, height: 300}}>
      <p className="text-center">Create a fixture here</p> 

      <form className="py-4 relative">
        <button className="bg-red-400 w-5 h-5 text-white text-center rounded-full outline-none absolute right-0 -top-4" onClick={()=>ref.current?.close()}>
          X
        </button>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-6">
            <label>Game Week</label>
            <input type="text" className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"  value={gameWeek}
             onChange={(e: ChangeEvent<HTMLInputElement>)=> setGameWeek(+e.target.value)} 
              />
          </div>
          <div className="col-span-6">
            <label>Season</label>
             <input type="text" className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"  value={season} disabled
            //  onChange={(e: ChangeEvent<HTMLInputElement>)=> setSeason(e.target.value)} 
              />
          </div>
        </div>
         <div className="grid grid-cols-12 gap-2">
          <div className="col-span-6">
            <label>Home team</label>
            <input type="text" className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"  value={homeTeam}
             onChange={(e: ChangeEvent<HTMLInputElement>)=> setHomeTeam(+e.target.value)} 
              />
          </div>
          <div className="col-span-6">
            <label>Away team</label>
             <input type="text" className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"  value={awayTeam}
             onChange={(e: ChangeEvent<HTMLInputElement>)=> setAwayTeam(+e.target.value)} 
              />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-6">
            <label>Kickoff</label>
            <input type="time" className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"  value={time}
             onChange={(e: ChangeEvent<HTMLInputElement>)=> setTime(e.target.value)} 
              />
          </div>
          <div className="col-span-6">
            <label>Date</label>
             <input type="date" className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"  value={date}
             onChange={(e: ChangeEvent<HTMLInputElement>)=> setDate(e.target.value)} 
              />
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 mb-2">
          <button className="w-full px-5 py-2 text-white text-center bg-blue-600">Create Fixture</button>
        </div>
      </form>  
    </div>
  )
})

export default CreateFixture
