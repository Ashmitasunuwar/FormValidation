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

    return <form className="row">SignUp
        <label> FullName:</label>
        <input  className='col-6'type='text' value={FullName} onChange={(e) => handleFullName(e)} />
        <label> Date of Birth:</label>
        <input  className='col-6'type="date" value={Dob} onChange={handleDob} />
        <label> Email id:</label>
        <input  className='col-6' type="text" value={email} onChange={(e) => { handleEmail(e) }} />
        <label> Password:</label>
        <input  className='col-6' 
          type="text" value={password} onChange={(e) => { handlepassword(e) }} />
      <button  
          style={{marginTop:'5px'}}className="btn btn-outline-primary col-6"> Submit</button>
    </form>
}
export default SignUp