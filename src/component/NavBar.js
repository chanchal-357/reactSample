import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Registeration form
                        <p><Link to="/RegisterNew">Register </Link>New page.</p>
                        <p><Link to="/">Back to</Link> Home.</p>
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;