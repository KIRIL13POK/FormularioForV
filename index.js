//-------------------------Modul-------------------------
const express = require('express');
const exphbs = require('express-handlebars');
// Los routes modul
const routesFormulario = require('./routes/formulario.js');
const routesIniciar = require('./routes/iniciar.js');
const routesRecuperarPass = require('./routes/recuperarPass.js');
const routesDentro = require('./routes/dentro.js');
const routesPrincipal = require('./routes/principal.js');


const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
//app.use(express.json());

//----------------Paginas con Routes-------------------
//Principal
app.use ('/principal', routesPrincipal);
//Iniciar Sesión
app.use ('/iniciar', routesIniciar);
//Formulario
app.use ('/formulario', routesFormulario);
//Recuperar Password
app.use ('/recuperarPass', routesRecuperarPass);
//Dentro
app.use ( '/dentro', routesDentro);

//---------------------Serever------------------------
const port = 4000;
app.listen(port, () => {
    console.log(`El Servidor esta escuchando en el puerto ${port}`)
})
;
