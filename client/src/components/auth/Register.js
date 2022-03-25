import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Register = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
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
                <p>Email: </p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <p>Password: </p>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button>Submit:</button>
            </form>
        </div>
    )
}
export default Register