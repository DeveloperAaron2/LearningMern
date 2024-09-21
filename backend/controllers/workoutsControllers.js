const Workout = require ('../models/workoutModel.js');
const mongoose = require('mongoose');

const getAllWorkouts = async (req, res) => {
    const user_id = req.user._id;


    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1  });
    res.status(200).json(workouts);
}

const getWorkoutById = async (req, res) => {
    const { id  } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'Invalid ID' });  //Check if id is valid mongoose ID
    } 

    const workout = await Workout.findById(id);
    if(!workout) return res.status(404).json({ error: 'Workout not found' });
    res.status(200).json(workout);
}

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    let emptyFiedls = [];

    if(!title){
        emptyFiedls.push('title');
    }
    if(!load){
        emptyFiedls.push('load');
    }
    if(!reps){
        emptyFiedls.push('reps');
    }

    if(emptyFiedls.length > 0){
        return res.status(400).json({ error: 'Please fill in all fields', emptyFiedls: emptyFiedls });
    }

    try{
       const user_id = req.user._id
       const workout = await Workout.create(
        { title, load, reps, user_id }
       )
       res.status(200).json(workout)
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
    //res.json({ message: 'Post a new workout'});
}

const deleteWorkout = async (req, res) => {
    const { id  } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'Invalid ID' });  //Check if id is valid mongoose ID
    }
    
    const workout = await Workout.findByIdAndDelete(id);
    if(!workout) return res.status(400).json({ error: 'Workout not found' });
    res.status(200).json({ message: `Deleted workout with id: ${id} `});
}

const updateWorkout = async (req, res) => {
    const { id  } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'Invalid ID' });  //Check if id is valid mongoose ID
    }
    const workout = await Workout.findByIdAndUpdate(id, req.body, { new: true});
    if(!workout) return res.status(404).json({ error: 'Workout not found' });
    res.status(200).json(workout);
}

module.exports = { createWorkout, getAllWorkouts, getWorkoutById, deleteWorkout, updateWorkout };