const express = require('express');
const morgan = require('morgan');
const {connect} = require('mongoose'); // Object Document Mapping lib
// const routes = require('./user/user.routes');

var bodyParser = require('body-parser')
// Express app
const app = express();
const cors = require('cors');

// Connect to mongo db
const dbURI = 'mongodb+srv://micapiacenza:qwerty123@lets-chat.s5mizeo.mongodb.net/letschatdb?retryWrites=true&w=majority';
// mongoose.connect(dbURI).then((result) => app.listen(3000)).catch((err) => console.log(err));

try {
    connect(dbURI, {useNewUrlParser: true}, () => {
        console.log('mongoose connected');
        app.listen(3000);

// register view engine
        app.set('view engine', 'ejs');

// middleware & static files
        app.use(express.static('public'));
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
        // Set up CORS
        app.use(cors({
            origin: true, // "true" will copy the domain of the request back
                          // to the reply. If you need more control than this
                          // use a function.

            credentials: true, // This MUST be "true" if your endpoint is
                               // authenticated via either a session cookie
                               // or Authorization header. Otherwise the
                               // browser will block the response.

            methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking
                                                   // pre-flight OPTIONS requests
        }));
        app.use(morgan('dev'));
        app.use((req, res, next) => {
            res.locals.path = req.path;
            next();
        });
        const apiRoutes = require('./routes');
        app.use('/api', apiRoutes);
// routes
        app.get('/', (req, res) => {
            res.redirect('/main-chat');
        });

        app.get('/profile', (req, res) => {
            res.render('profile', {title: 'Profile'});
        });


// 404 page
        app.use((req, res) => {
            res.status(404).render('404', {title: '404'});
        });
    });
} catch (e) {
    console.error(e);
}
