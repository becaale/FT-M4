// levantar el servidor y ponerlo a escuchar en un puerto
const app = require("./src/app");
const { database } = require("./src/db");
const PORT = 3001;

// force:true - ELIMINA TODAS LAS TABLAS DE LA BDD, Y LAS VUELVE A CREAR EN BASE A LOS MODELOS
// alter:true - ACTUALIZA LAS TABLAS DE BDD EN BASE A LOS MODELOS

database
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log("listening on port", PORT);
    });
  })
  .catch((err) => console.log(err.message));
