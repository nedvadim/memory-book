import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import app from '../../firebase/base'
import { postData } from "../../api/users";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(),
    },
    title: {
        flexGrow: 1,
        color: 'white',
        textDecoration: 'none'
    },
}));
const handleSignOut = () => {
    app.auth().signOut().then(res => {
        alert('Sign-out successful.')
    }).catch((e) => {
        alert(`ERROR: ${e}`);
        // An error happened.
    });
};
const handleBenis = async () => {
    const email = app.auth().currentUser.email;
    console.log(email);
    postData('HUINA').then(res=>{
        console.log(res)
    }).catch(e=>{
        console.log(e);
    });
};
const Header = (props) => {
    const materialClasses = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={props.onMenuOpen}>
                    <MenuIcon />
                </IconButton>
                <Link to='/' className={materialClasses.title}>
                    <Typography variant="h6">
                        MemoryBook
                    </Typography>
                </Link>
                <Button color="inherit" onClick={handleSignOut}>Sign out</Button>
                <Button color="inherit" onClick={handleBenis}>benis</Button>
            </Toolbar>
        </AppBar>)
};

export default Header
