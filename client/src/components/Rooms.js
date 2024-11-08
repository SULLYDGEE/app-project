import React, { useState, useEffect } from "react";
import RoomCard from "./RoomCard";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Définit l'état de chargement
      try {
        const response = await fetch("/api/rooms");
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        const json = await response.json();
        setRooms(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false); // Réinitialise l'état de chargement
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Chargement...</p>;
  }
  //code de la gestion d'erreur
  if (error) {
    return (
      <p>
        Désolé, une erreur s'est produite lors du chargement des chambres.
        Veuillez réessayer plus tard.
      </p>
    );
  }

  return (
    <>
      {rooms.length === 0 ? (
        <p>Aucune chambre trouvée.</p>
      ) : (
        rooms.map((room) => (
          <Link key={room._id} to={`/rooms/${room._id}`}>
            {" "}
            {/* Ajout de /rooms/ pour plus de clarté */}
            <RoomCard room={room} />
          </Link>
        ))
      )}
    </>
  );
};

export default Rooms;
