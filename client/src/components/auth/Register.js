import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { AuthContext } from "../../providers/AuthProvider"
import { Link, Outlet } from 'react-router-dom'


const Register = ()=>{
    const [email, setEmail] = useState('test1@test.com')
    const [password, setPassword] = useState('123456')
    const [loading,setLoading] = useState(false);
    
    // const [confirmPassword, setConfirmPassword] = useState('') // not need but nice for UX

    const auth = useContext(AuthContext)
   

    const handleSubmit = (e)=>{
        e.preventDefault()
        auth.handleRegister({email, password})
    }

    // with devise these are required
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <p>Email: </p> <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <p>Password: </p>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <Button variant="primary" size="sm" onClick={handleSubmit}>Register</Button>
                {!loading &&
                <>
                    <div className="alt-text">
                        <br/>
                    <p>Already have an account? {' '} {' '}
                    
                    <Link to= '/login'>Login Here</Link></p>
                    </div>
                </>
                }
            </form>
        </div>
    )
}
export default Register