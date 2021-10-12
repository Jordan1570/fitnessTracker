const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');

router.use('/', homeRoutes); // homeroutes
router.use('/api', apiRoutes); // api routes

module.exports = router;