import { useEffect } from "react"
import { WorkoutForm } from "../components/WorkoutForm.jsx";
import { WorkoutDetails } from '../components/WorkoutDetails.jsx';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";
import { useAuthContext } from "../hooks/useAuthContext.jsx";

export const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext(); // This hook will ensure that the WorkoutContext is available throughout the component tree.
    const {user} = useAuthContext(); // This hook will ensure that the AuthContext is available throughout
    useEffect(()=>{
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const data = await response.json()
            
            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: data })
            }
        }
        if(user){
            fetchWorkouts();
        }
    },[dispatch,user])
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
