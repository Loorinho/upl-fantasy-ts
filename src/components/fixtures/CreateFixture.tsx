import { ChangeEvent, forwardRef, useState } from 'react'
type CreateFixtureProps = {}
const CreateFixture = forwardRef((CreateFixtureProps, ref) => {

  const [homeTeam, setHomeTeam] = useState(0)
  const [awayTeam, setAwayTeam] = useState(0)
  const [gameWeek, setGameWeek] = useState(1)
  const [season, setSeason] = useState("2023/2024")
  
  return (
    <div className="rounded p-2" style={{width: 500, height: 500}}>
      <p className="text-center">Create a fixture here</p> 

      <form className="py-4 relative">

        <button className="bg-red-400 w-4 h-4 text-white rounded-full outline-none absolute right-0" onClick={()=>ref.model?.close()}>
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
             <input type="text" className="w-full p-2 outline-none border border-2-blue-500 focus:ring-1 focus:ring-blue-600 rounded"  value={season}
             onChange={(e: ChangeEvent<HTMLInputElement>)=> setSeason(e.target.value)} 
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

        <div className="flex justify-center items-center">
          <button className="w-full px-2 py-3 text-white text-center bg-blue-600">Create Fixture</button>
        </div>
      </form>  
    </div>
  )
})

export default CreateFixture
