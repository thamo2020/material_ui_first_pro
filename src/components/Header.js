import React from 'react';
import { Badge, Divider, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/styles';
//import classes from "*.module.css";
// useStyle provide the solution for add css in material-ui

const useStyles = makeStyles((theme)=> ({
    title:{
        flexGrow:1
    },
    tagline:{
        fontSize:20,
        textTransform:"uppercase",
        justifyContent:"center",
        fontFamily:"Montserrat"
    },
}));


//divider is a horizontal line that divide those two toolbars
const Header = () => {
    const classes = useStyles(); //create object for that classes    
    return (
        <>
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                    <Typography variant="h6" style={{color:'black'}} className={classes.title}>
                       Blogging website 
                    </Typography>

                <IconButton color="inherit">
                    <Badge badgeContent={4} color="error">
                    <NotificationsIcon />
                    </Badge>
                </IconButton >

                <IconButton color="inherit">
                    <PersonIcon />
                </IconButton>
                   
                
            </Toolbar>

            <Divider/> 

            <Toolbar className={classes.tagline}>Express your emotions through words.</Toolbar>
        </>
    )
}

export default Header
