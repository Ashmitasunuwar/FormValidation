import { useState, useEffect } from 'react'
const Login = ({ handelchange }) => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('')
    const [age, setAge] = useState(0)

    useEffect(() => {
        console.log("fhdfds", userName)
    }, [userName])

    const handleChange = (e) => {
        // console.log('v', e)
        setUserName(e.target.value)
    }
    const pswdChange = (e) => {
        console.log('v', e)
        setEmail(e.target.value)
    }



    return (<div className='container'>  Login Page
        <form className='row'> 
            
            <label  >Enter your Name</label>
            <input  className='col-6'type="text" style={{ marginLeft: '5px' }} value={userName} onChange={(e) => { handleChange(e) }} />    
            <label >Enter your email</label>
            <input className='col-6' type="text" style={{ marginLeft: '5px' }} value={email} onChange={(e) => { pswdChange(e) }} />
        </form>

    </div>)


}
export default Login
