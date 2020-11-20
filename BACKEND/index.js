const express  = require ('express');
const app = express();
const cors = require ('cors');

const routes = require ('./routes/routes');
//const modulos = require('./routes/modulos');

//Middlewares
app.use(express.json());
app.use ('/api', routes);
app.use(express.urlencoded({extended:false}));
app.use(cors());
//app.use ('/api/modulos', modulos);


//Routes API
app.get('/', (req,res)=>{
  res.send('PROYECTO PEDADOGICO INTEGRADOR - PPI')
})



//Setting - Ajustes
app.set('json spaces',2);

app.set ('port',3001);
app.listen(app.get("port"), ()=>{
  console.log('SERVIDOR ACTIVADO EN EL PUERTO 3001')
});