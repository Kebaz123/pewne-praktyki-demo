// config.js
const mongoose = require("mongoose");
require("dotenv").config(); // <--- DODAJ TO, jeśli nie masz w app.js

const polaczenieDoBazy = async function () {
  try {
    // Pobierz URI z zmiennej środowiskowej
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error("Brak MONGODB_URI w zmiennych środowiskowych!");
    }

    const connect = await mongoose.connect(mongoURI, {
      // Te opcje są ważne dla Managed Database
      tls: true, // Wymuś połączenie TLS
      tlsInsecure: false, // Nie zezwalaj na niebezpieczne certyfikaty
      retryWrites: true,
      w: "majority",
    });

    console.log("✅ Połączono z bazą danych MongoDB (Managed Database)");
  } catch (err) {
    console.error("❌ Błąd połączenia z bazą danych:", err);
    process.exit(1); // Zatrzymaj aplikację, jeśli baza nie działa
  }
};

module.exports = {
  polaczenieDoBazy,
};
