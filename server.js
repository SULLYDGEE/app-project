import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
import cors from "cors"; // Importer CORS

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors()); // Appliquer le middleware CORS
app.use(express.json());
app.use(express.static("client/build"));

// Log de la valeur de l'URI pour vérification
console.log("MongoDB URI:", process.env.MONGODB_URI);

// Connexion à la base de données MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Terminez le processus si la connexion échoue
  });

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
