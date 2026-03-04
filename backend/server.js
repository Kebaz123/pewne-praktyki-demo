require("dotenv").config();

const express = require("express"); //Główna biblioteka, express

const cors = require("cors"); //Biblioteka która ustala, jakie adresy mogą robić Javascriptowe requesty do backendu.

const bodyParser = require("body-parser"); //Biblioteka żeby formularze HTML wysłane POST przekstalicic do JSON w req.body

const MessageValidatorAws = require("sns-validator");
const snsValidator = new MessageValidatorAws();

const { polaczenieDoBazy } = require("./config"); //Middleware do podlaczenia naszej bazy danych do backendu

const { emailBlacklistModel } = require("../backend/models/emailBlacklist.js");

const app = express(); //Instancja backendu

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());

polaczenieDoBazy(); // Uruchamiamy łączenie z naszą bazą danych

//Uruchamiamy backend na wybranym porcie
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
