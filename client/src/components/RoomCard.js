import React from "react";
import { Card, Badge } from "antd";
const { Meta } = Card;

const RoomCard = ({ room }) => {
  // Notez que nous utilisons une image prédéfinie dans le dossier public/images
  const imageName = room.imageName || "image2.jpg"; // Par défaut, utilisez 'default.jpg' si aucune image n'est spécifiée

  return (
    <div style={{ width: 300, margin: "1rem" }}>
      <Badge count="PROMO">
        <Card
          cover={
            <img
              style={{
                width: "300px",
                height: "350px",
                objectFit: "cover",
              }}
              alt={room.name}
              src={`/images/${imageName}`} // Utilisation du chemin relatif depuis le dossier public
            />
          }
        >
          <Meta
            title={room.name.toUpperCase()}
            description={`Nombre de personnes maximum : ${room.maxPersons}`}
          />
        </Card>
      </Badge>
    </div>
  );
};

export default RoomCard;
