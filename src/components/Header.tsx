import React from "react";
import { AppBar, Drawer, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery, useTheme, IconButton, Stack, Box, Button, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AppBar position="fixed" sx={{ background: '#67B1B4' }}>
            <Toolbar>
                <Stack direction='row' sx={{ flexGrow: 1 }} alignItems="center">
                    <Avatar src="logo.png" sx={{width:'80px', height: '50px'}}/>
                    <Typography
                        sx={{
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            display: 'flex',
                            marginLeft: 2,
                        }}
                    >
                        Missão Bom Jardim
                    </Typography>
                </Stack>


            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Stack direction='row' spacing={2}>
                    <Box>
                        <Typography>Home</Typography>
                    </Box>

                    <Box>
                        <Typography>Home</Typography>
                    </Box>

                    <Box>
                        <Typography>Home</Typography>
                    </Box>

                    <Box>
                        <Typography>Home</Typography>
                    </Box>



                </Stack>
            </Box>


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
                                <Button variant="text">Text</Button>
                            </ListItem>
                            <ListItem onClick={() => { }}>
                                <Button variant="text">Text</Button>
                            </ListItem>
                            <ListItem onClick={() => { }}>
                                <Button variant="text">Text</Button>
                            </ListItem>
                        </List>
                    </Drawer>
                </>
            )}
        </Toolbar>
        </AppBar >
    );
}


