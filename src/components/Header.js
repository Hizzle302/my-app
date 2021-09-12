import React from 'react'
import Paper from '@material-ui/core/Paper';


function Header() {
    return (
        <Paper style={{padding: "5px", display: "flex" }} square elevation={3}>
            <img style={{ width: "50px" }} src="https://library.kissclipart.com/20181008/qw/kissclipart-react-logo-transparent-background-clipart-react-co-f9507a1adbc3c5f3.jpg" alt=" "></img>
           <h1 style={{ margin: "0", fontFamily: "cursive", fontWeight: "100" }}>React App</h1> 
        </Paper>
    );
}

export default Header
