import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>)
};

export default Header
