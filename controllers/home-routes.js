const router = require('express').Router();
const { Workout } = require('../models');

router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/continue-workout', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/new-workout', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/stats', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
