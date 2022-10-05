const express = require('express');
const router = express.Router();
const userRoutes = require('./user/user.routes');

router.addRoute = (...args) => {
    router.use(...args);
    if (args[1]) {
        let stri = args[0].substr(1) + ':';
        args[1].stack.map((e) => {
            if (e.route) {
                stri = stri + (' - ' + e.route.path.substr(1));
            }
        });
        console.log('Loaded route:', stri, {detailedLogs: false});
    }
};

router.addRoute('/user', userRoutes);

module.exports = router;