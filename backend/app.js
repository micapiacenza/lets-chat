const express = require('express');
const morgan = require('morgan');
const {connect} = require('mongoose'); // Object Document Mapping lib
// const routes = require('./user/user.routes');

// Express app
const app = express();
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
        app.use(express.urlencoded({extended: true}));
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
