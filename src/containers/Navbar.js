import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import { Home, Book, AccountBox, VerifiedUserRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <List component="nav">
                <ListItem component="div">
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            <Link to="/home">
                                <span style={{ color: "white" }}>Home</span>
                            </Link>
                            <Home />
                        </TypoGraphy>
                    </ListItemText>

                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            <Link to="/posts">
                                <span style={{ color: "white" }}>Posts</span>
                            </Link>
                            <Book />
                        </TypoGraphy>
                    </ListItemText>

                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            <Link to="/contact">
                                <span style={{ color: "white" }}>Contact</span>
                            </Link>
                            <AccountBox />
                        </TypoGraphy>
                    </ListItemText>
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            <Link to="/">
                                <span style={{ color: "white" }}>Register</span>
                            </Link>
                            <VerifiedUserRounded />
                        </TypoGraphy>
                    </ListItemText>
                </ListItem>
            </List>
        );
    }
}

export default Navbar;
