import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { logout } from "../../store/actions";

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
    const handleSignOut = () => {
        props.onSignOut();
    };
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
            </Toolbar>
        </AppBar>)
};
const mapDispatchToProps = dispatch => {
    return {
        onSignOut: () => { dispatch(logout()) }
    }
};
export default connect(null, mapDispatchToProps)(Header)
