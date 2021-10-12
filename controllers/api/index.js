const router = require('express').Router();
const workoutRoutes = require('./workout-routes');

router.use('/workouts', workoutRoutes);
router.use('/workouts/range', workoutRangeRoutes);

module.exports = router;