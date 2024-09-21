import { Link } from 'react-router-dom'
import { useLogOut } from '../hooks/useLogOut'
import { useAuthContext } from '../hooks/useAuthContext'


export const NavBar = ()=> {
    const { logout } = useLogOut();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }
    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    {user && (<div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Log out</button>
                    </div>)}
                </nav>
                <nav>
                    {!user && (
                        <div>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </div>
                    )}
                </nav>
            </div>
        </header>
    )

}