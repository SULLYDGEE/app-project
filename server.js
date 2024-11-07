import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000; // Utilisation du port spécifié dans l'environnement ou 5000 par défaut

const app = express();

app.use(express.json()); // Middleware pour parser le JSON

console.log(
  "Tentative de connexion à MongoDB avec l'URI :",
  process.env.MONGODB_URI
);

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.error("Erreur de connexion à MongoDB:", err));

app.use(routes); // Utilisation des routes définies

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le port : ${PORT}`);
});
