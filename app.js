const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql')
const myConecction = require('express-myconnection');
const morgan = require('morgan');

//importar rutas
const maestroRoutes = require('./routes/maestro');
const { urlencoded } = require('express');

//configuración
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConecction(mysql, {
       host: 'us-east.connect.psdb.cloud',
       user: 'il5z45ocrqjzogoz3oaf',
       password: 'pscale_pw_14klXM9ql1tO2mMQJr32PcUm1lg1r6x0atY9E7AWrmk',
       database: 'crud',
       ssl: {
              rejectUnauthorized: false
            }
}, 'single'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', maestroRoutes);


//archivos estaticos (imagenes)


// starting the server
app.listen(app.get('port'), () => {
       console.log('Server en el puerto 3000');
});
