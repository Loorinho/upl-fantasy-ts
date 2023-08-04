const Managers = () => {
    const { data: managers, isLoading } = useQuery({
      queryKey: ["managers"],
      queryFn: fetchManagers,
    });

  return (
     <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Team</th>
                </tr>
            </thead>
            <tbody>
                {managers?.map((manager: any) => (
                    <tr key={team.id}>
                        <td>{manager.first_name} {manager.last.name}</td>
                        <td>{manager.age}</td>
                        <td>{manager.team}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Managers