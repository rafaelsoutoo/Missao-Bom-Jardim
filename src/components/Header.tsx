import React from "react";
import { AppBar, Avatar, Drawer, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery, useTheme, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Avatar sx={{ cursor: 'pointer' }} />
                <Typography sx={{ flexGrow: 1 }} />
                {isMobile && (
                    <>
                        <IconButton onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={isOpen}
                            onClose={toggleDrawer}
                        >
                            <List>
                                <ListItem onClick={() => { }}>
                                    <ListItemText primary="Item 1" />
                                </ListItem>
                                <ListItem onClick={() => { }}>
                                    <ListItemText primary="Item 2" />
                                </ListItem>
                                <ListItem onClick={() => { }}>
                                    <ListItemText primary="Item 3" />
                                </ListItem>
                            </List>
                        </Drawer>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}


