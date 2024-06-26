// Importera Express för att kunna skapa en webbserver och Mongoose för att interagera med MongoDB-databasen.
import express from "express"
import mongoose from "mongoose"
import apiregister from "./apiregister.js"
import { rateLimit } from 'express-rate-limit'

// Skapar en instans av Express-appen, detta är vår webbserver.
const server = express()

// Bestämmer vilken port som servern ska lyssna på.
const port = 3000

/*
  Servern använder en middleware ( express.json() ) för att omvandla våra request till JSON.
  Detta gör att vi kan hantera JSON-data som skickas i request body.
*/
// Skapa en rate limiter med express-rate-limit
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Tidsfönstret för att begränsa förfrågningar i millisekunder
  limit: 100, // Maximalt antal tillåtna förfrågningar per IP-adress under tidsfönstret
  message: 'För många förfrågningar från denna IP, försök igen om en stund.' // Meddelande som sända tillbaka när gränsen är nådd
});

// Applicera rate limiter på alla API-förfrågningar

server.use(express.json(), apiLimiter)

/* 
  Vår MongoDB Atlas connection-string
  Ansluter till MongoDB-databasen med hjälp av Mongoose.
  Strängen innehåller: 
    Användarnamn - <Username>
    Lösenord - <Password>
    Databasnamnet (Optional) - <DB-Name>
*/
mongoose.connect("mongodb+srv://Lange6969:Tomten99@cluster0.4kh08gs.mongodb.net/bookFinder")
/*
  Byt ut connection-string'en med er egna. Ni hittar er på MongoDB Atlas genom att gå in på: 

  Database -> 
  Kolla att ni har en databas, heter ofta "Cluster0" ->
  Trycka på "Connect" för den databasen ni vill ansluta till ->
  Kolla att eran nuvarande ip-adress är tillagd ->
  Välj "Compass" ->
  Under "2. Copy the connection string" hittar ni er connection-string

  OBS. Glöm inte ändra <password> !
*/
apiregister(server, mongoose)
/* 
  Startar servern så att den lyssnar på den definierade porten.
  När servern har startat, loggas ett meddelande till konsolen.
*/
server.listen(port, () => console.log(`Listening on port http://localhost:${port}`))