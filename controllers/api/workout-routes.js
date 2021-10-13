const router = require("express").Router();
const Workout = require("../../models/Workout");

router.get('/', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        },
    ])
        .then(data => {
            res.json(data)
        })
});

router.post('/', (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put('/:id', ({ params, body }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {
                exercises: body
            }

        },
        {
            new: true
        }
    )
        .then(data => {
            res.json(data)
        })
});

router.get('/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        },
    ])
        .then(data => {
            res.json(data)
        })
});


module.exports = router;