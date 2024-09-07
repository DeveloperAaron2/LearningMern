const express = require('express');
const Workout = require ('../models/workoutModel.js');
const router = express.Router();
const { createWorkout, getAllWorkouts, getWorkoutById, deleteWorkout, updateWorkout } = require('../controllers/workoutsControllers.js');
//get all workouts
router.get('/', getAllWorkouts);
//get single workout
router.get('/:id', getWorkoutById);
//post a workout
router.post('/', createWorkout)
//delete a workout
router.delete('/:id', deleteWorkout)
//Update a workout
router.patch('/:id', updateWorkout);

module.exports = router;