import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const WorkoutDetails = ({ workout })=> {
    const { dispatch } = useWorkoutsContext();
    const handleClick = async () => {
        const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
            method: 'DELETE',
        })
        if(!response.ok) {
            console.error('Failed to delete workout');
        }
        if(response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: workout._id });
        }
     }
    return (
        <div className="workout-details">
            <h3>{workout.title}</h3>
            <p>Load: {workout.load} kg</p>
            <p>Reps: {workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}

