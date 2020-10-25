import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

export default class MainDrawer extends React.Component {
    state = {
        isDrawerOpened: false
    };
    render() {
        return (
            <React.Fragment>
                <Drawer anchor='left' open={this.props.isOpen} onClose={this.props.onClose}>
                    <p>drawer content</p>
                </Drawer>
            </React.Fragment>
        )
    }
}
