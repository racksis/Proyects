//importación modulos

const express= require('express');
const path= require('path');
const exphbs= require('express-handlebars');
const bodyParser= require('body-parser');


//inicialización

const app= express();



//settings

app.set('port', 4000);
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}));
app.set("view engine", ".hbs");


//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//routes
app.use(require('./routes/index'));
app.use('/links', require('./routes/links'));
app.use('/webService',require('./routes/webService'));

//startup
app.listen(app.get('port'), ()=>{
    console.log("Servidor iniciado...");
});