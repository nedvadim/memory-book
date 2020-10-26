import React from 'react'
import classes from './MainDrawer.module.css'
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupIcon from '@material-ui/icons/Group';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

export default class MainDrawer extends React.Component {
    state = {
        isDrawerOpened: false,
        navItems: [
            {navName: 'Persons', icon: <GroupIcon />, to: '/persons'},
            {navName: 'Events', icon: <EventAvailableIcon />, to: '/events'}
            ]
    };
    render() {
        return (
            <React.Fragment>
                <Drawer anchor='left' open={this.props.isOpen} onClose={this.props.onClose}>
                    <List>
                        {this.state.navItems.map((item) => (
                            <Link to={item.to} onClick={this.props.onClose} className={classes.DrawerItem}>
                                <ListItem button key={item.navName}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.navName} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Drawer>
            </React.Fragment>
        )
    }
}
