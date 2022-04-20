import { useContext, useState } from "react"
import Button from "react-bootstrap/esm/Button"
import { AuthContext } from "../../providers/AuthProvider"
import { Link } from "react-router-dom"




const Login = ()=>{
    const [email, setEmail] = useState('test1@test.com')
    const [password, setPassword] = useState('123456')
    const [loading, setLoading] = useState(false);
    
    // const [confirmPassword, setConfirmPassword] = useState('') // not need but nice for UX

    const auth = useContext(AuthContext)
   

    const handleSubmit = (e)=>{
        e.preventDefault()
        auth.handleLogin({email, password})
    }

    // with devise these are required
    return (
        <div>
            
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <p>Email: </p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <br/>
                <br/>
                <p>Password: </p>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <Button variant="primary" size="sm" onClick={handleSubmit}>Login</Button>
                {!loading &&
                <>
                    <div className="alt-text">
                        <br/>
                        <p>Already have an account? {' '} {' '}
                    
                    <Link to= '/register'>Register Here</Link></p>
                    </div>
                </>
                }
            </form>
        
        </div>
    )
}
export default Login