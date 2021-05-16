import React from 'react'
import {Paper,makeStyles,Button} from '@material-ui/core';
import { auth } from '../firebase/config';

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
const Home = ({user}) => {
    const classes=useStyle()
    const logout=()=>{
        auth.signOut()
    }
    console.log("user",user.email)
    return (
        <>
            <Paper elevation={3}  className={classes.root}>
                <h1>
                    Home
                </h1>
                <h2>You Are {user.email}</h2>
                <Button onClick={logout} variant="contained" color="secondary">
                    Logout
                </Button>
            </Paper>
        </>
    )
}

export default Home
