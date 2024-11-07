const Room = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await window.fetch(`/api/rooms/${id}`);
        if (!data.ok) throw new Error("Erreur lors du chargement des données");
        const json = await data.json();
        setRoom(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return room ? (
    <div>
      <RoomCard room={room} />
      <h2>Éditer</h2>
      <RoomForm id={id} room={room} setRoom={setRoom} />
    </div>
  ) : null;
};

export default Room;
