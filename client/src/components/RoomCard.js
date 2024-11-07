import React from "react";
import { Card, Badge } from "antd";
const { Meta } = Card;

const RoomCard = ({ room }) => {
  console.log("room:", room, "room.id:", room.id); // Instruction de débogage
  const imageName = `chambre${room.id}.jpg`;

  return (
    <div style={{ width: 300, margin: "1rem" }}>
      <Badge count="PROMO">
        <Card
          cover={
            <img
              style={{ width: "300px", height: "350px", objectFit: "cover" }}
              alt={room.name}
              src={`/images/${imageName}`}
              onError={(e) => {
                console.error(
                  "Échec du chargement de l'image :",
                  e,
                  `pour l'ID de la chambre : ${room.id}`
                );
                e.target.src = "/images/image2.jpg";
              }}
            />
          }
        >
          <Meta
            title={room.name.toUpperCase()}
            description={`Nombre de personnes maximum : ${room.maxPersons}`}
          />
        </Card>
      </Badge>
    </div>
  );
};

export default RoomCard;
