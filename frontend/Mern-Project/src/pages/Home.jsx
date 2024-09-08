import { useEffect } from "react"
import { WorkoutForm } from "../components/WorkoutForm.jsx";
import { WorkoutDetails } from '../components/WorkoutDetails.jsx';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";

export const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext(); // This hook will ensure that the WorkoutContext is available throughout the component tree.
    
    useEffect(()=>{
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts')
            const data = await response.json()
            
            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: data })
            }
        }
        fetchWorkouts();
    },[dispatch])aaa
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => {
                    return (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    )
                })}
            </div>
            <WorkoutForm/>
        </div>
    )
}
