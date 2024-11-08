import React, { useState, useEffect } from "react";
import RoomCard from "./RoomCard";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch("/api/rooms");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const json = await response.json();
        setRooms(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <>
      {rooms.map((room) => (
        <Link key={room._id} to={`/rooms/${room._id}`}>
          <RoomCard room={room} />
        </Link>
      ))}
    </>
  );
};

export default Rooms;
