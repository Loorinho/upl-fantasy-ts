const Managers = () => {
    const { data: managers, isLoading } = useQuery({
      queryKey: ["managers"],
      queryFn: fetchManagers,
    });

  return (
    <div>Managers</div>
  )
}

export default Managers
