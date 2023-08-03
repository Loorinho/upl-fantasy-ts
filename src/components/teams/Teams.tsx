const Teams = () => {
    const { data: players, isLoading } = useQuery({
    queryKey: ["lecturers"],
    queryFn: fetchPlayers,
  });

  console.log("Plyers: ", players)
  return (
    <div>Teams list</div>
  )
}

export default Teams
