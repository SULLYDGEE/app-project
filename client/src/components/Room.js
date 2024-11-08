import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RoomCard from "./RoomCard";
import RoomForm from "./RoomForm";

const Room = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch(`/api/rooms/${id}`);
        if (!response.ok)
          throw new Error("Erreur lors du chargement des données");
        const json = await response.json();
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

  return (
    <div>
      {room ? (
        <>
          <RoomCard room={room} />
          <h2>Éditer</h2>
          <RoomForm id={id} room={room} setRoom={setRoom} />
        </>
      ) : (
        <p>Aucune chambre trouvée.</p> // Message affiché si la chambre est null
      )}
    </div>
  );
};

export default Room;
