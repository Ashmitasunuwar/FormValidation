import { useState } from "react"



const SignUp = () => {
    const [FullName, setName] = useState('');
    const [Dob, setDob] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFullName = (e) => {
        console.log(e);
    }

    const handleDob = (event) => {
        console.log(event);
        setDob(event.target.value)
    }
    const handleEmail = (e) => {

        setEmail(e.target.value)
    }

    const handlepassword = (e) => {

        setEmail(e.target.value)
    }

    return <form>SignUp
        <label> FullName:</label>
        <input type='text' value={FullName} onChange={(e) => handleFullName(e)} />
        <label> Date of Birth:</label>
        <input type="date" value={Dob} onChange={handleDob} />
        <label> Email id:</label>
        <input type="text" value={email} onChange={(e) => { handleEmail(e) }} />
        <label> Password:</label>
        <input type="text" value={password} onChange={(e) => { handlepassword(e) }} />
        <button>Submit</button>
    </form>
}
export default SignUp