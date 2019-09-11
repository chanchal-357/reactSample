import React from "react";
import Navbar from "./Navbar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";

class Header extends React.Component {
    render() {
        window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
        return (
            <AppBar color="primary" position="static">
                <Toolbar>
                    <TypoGraphy variant="title" color="inherit">
                        React App
          </TypoGraphy>
                    <Navbar />
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
