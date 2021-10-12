const router = require("express").Router();
const Workout = require("../../models/Workout");

router.get('/', (req, res) => {
    Workout.find
})

module.exports = router;