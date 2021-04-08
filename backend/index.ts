import express from 'express'
import cors from 'cors'


//Rutas
import productRoutes from './routes/products'


//Inicialización
const app = express();

//Configuracion
app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.use(cors())

//Routes 

app.use('/api/products', productRoutes)



const path = require('path');

  // Serve any static files
  app.use(express.static(path.join(__dirname, '../frontend/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../fronted/build', 'index.html'));
  });


// Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Iniciando servidor en el puerto `, app.get('port'));
});