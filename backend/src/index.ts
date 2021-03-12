import express from 'express'

//Rutas
import productRoutes from './routes/products'


//Inicialización
const app = express();

//Configuracion
app.set('port', process.env.PORT || 3001);
app.use(express.json());

//Routes 

app.use('/api/products', productRoutes)


// Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server iniciado en el purto `, app.get('port'));
});