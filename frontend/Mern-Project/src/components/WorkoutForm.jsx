import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const handleSubmit = async (e) => {
    e.preventDefault();
    const newWorkout = { title, load, reps };
const response = await fetch('http://localhost:4000/api/workouts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newWorkout)
});
const data = await response.json();
if (!response.ok) {
    setError(data.error);
    console.log(data.emptyFiedls);  // Ensure emptyFields is always an array
    setEmptyFields(data.emptyFiedls);  // Ensure emptyFields is always an array
}

if (response.ok) {
    setTitle('');
    setLoad('');
    setReps('');
    setEmptyFields([]);
    setError(null);  // Reset error message after successful submission
    console.log('New workout added: ' + data);
    dispatch({ type: 'ADD_WORKOUT', payload: data });
}

    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>
            <label htmlFor="title">Title:</label>
            <input
             type="text" 
             id="title" 
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             className={emptyFields.includes('title')? 'error' : ''}
             required/>

            <label htmlFor="title">Load:</label>
            <input
             type="number" 
             id="load" 
             value={load}  
             onChange={(e) => setLoad(e.target.value)}
             className={emptyFields.includes('load')? 'error' : ''}
             />

             <label htmlFor="title">Reps:</label>
             <input
             type="number" 
             id="reps" 
             value={reps} 
             onChange={(e) => setReps(e.target.value)}
             className={emptyFields.includes('reps')? 'error' : ''}
             />
             <button type="submit">Add Workout</button>
             {error && <div className="error">{error}</div>}    
        </form>
    )
}