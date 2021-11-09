// installation d'un module en particulier qu'on utilise depuis le début
const express = require("express");

// parametres pour acceder à notre dossier views et au dossier public
const app = express();
app.use(express.static(__dirname + "/public"));
 app.set("views", "./views");
 app.set("view engine", "ejs");


// route d'acces à la page home, render du layout et du template home
app.get("/",(req, res)=>{
  res.render("layout",{template: "home"});

}) 


// connexion au server (l'écoute)
const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`listening port ${PORT} all is ok`);
  });