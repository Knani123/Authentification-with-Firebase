import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import {Paper,makeStyles ,Button} from '@material-ui/core';
import {auth} from '../firebase/config';
import { useAuth } from '../auth/useAuth';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyle=makeStyles(
    theme=>(
        {
            root:{
                maxWidth:400,
                margin:"auto",
                minHeight:"200px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column"
            }
        }
        ))
 
const initialState={
    email:"",
    password:""
}

const Login = () => {
    const history=useHistory()
    const {user,loading}=useAuth()
    console.log(user)
    useEffect(() => {
        if(user){
            console.log("user",user)
            console.log("user.email",user.email)
            history.push('/')
        }
    }, [user]);
   
    const classes=useStyle()
    const [input, setInput] = useState(initialState);
    const [error, setError] = useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(input)
        auth
        .signInWithEmailAndPassword(input.email,input.password)
        .then(data=>{
            console.log(data.email)
            history.push('/')
        })
        .catch(err=>{
            console.log(err.message)
            setError(err.message)
        })
        }
    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    if(loading){return <div style={{height:"700px",display:"flex",alignItems:"center",justifyContent:"center"}}><CircularProgress/></div>}
    return (
        <Paper elevation={3}  className={classes.root}>
        <form onSubmit={handleSubmit} className={classes.root}>
            <h3>Login</h3>
            <input required type="email" placeholder="Email" name="email" onChange={handleChange}/>
            <input type="password" name="password" onChange={handleChange}/>
            <Button variant="outlined" size="small" color="primary" type="submit">
             Small
            </Button>
        </form>
        </Paper>
    )
}

export default Login
