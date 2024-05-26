import React from "react";
import { AppBar, Drawer, List, ListItem, Toolbar, Typography, useMediaQuery, useTheme, IconButton, Stack, Box, Button, Avatar, Tab, Tabs, createTheme, ThemeProvider } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { Montserrat } from 'next/font/google'
import { useRouter } from "next/router";

const font = Montserrat({
    subsets: ['latin']
});

const customTheme = createTheme({
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    color: 'white', 
                    '&.Mui-selected': {
                        color: 'black',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: 'black', 
                },
            },
        },
    },
})

export function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isOpen, setIsOpen] = React.useState(false);

    const router = useRouter();

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <ThemeProvider theme={customTheme}>
            <AppBar position="fixed" sx={{ background: '#67B1B4', maxWidth:2300, zIndex:"1000", left:"50%",transform:"translateX(-50%)"}} >
                <Toolbar sx={{ mx: '5px' }}>
                    <Stack direction='row' sx={{ flexGrow: 1 }} alignItems="center">
                        <Avatar src="logo.png" sx={{ width: '80px', height: '50px', cursor: 'pointer' }} onClick={() => {
                            router.push("/");
                        }} />
                        <Typography
                            sx={{
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                display: 'flex',
                                marginLeft: 2,
                                fontSize: {
                                    xs: '15px',
                                    sm: 'large',
                                    md: '22px',
                                }
                            }}
                            className={font.className}
                        >
                            Missão Bom Jardim
                        </Typography>
                    </Stack>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Stack direction="row" spacing={2}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="Main Tabs"
                            >
                                <Tab label="Home" value="1" className={font.className} />
                                <Tab label="Sobre" value="2" className={font.className}/>
                                <Tab label="Estrutura" value="3"  className={font.className}/>
                                <Tab label="Contato" value="4"  className={font.className}/>
                            </Tabs>
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
                                <Tabs
                                    orientation="vertical"
                                    variant="fullWidth"
                                    value={value}
                                    onChange={handleChange}
                                    textColor="inherit"
                                    TabIndicatorProps={{
                                        style: {
                                            backgroundColor: 'black'
                                        }
                                    }}
                                    sx={{
                                        "& .Mui-selected": {
                                            color: '#000',
                                            fontSize: '20px',
                                            marginBottom: 3
                                        },
                                        borderRight: 2, borderColor: 'divider',
                                        marginTop: 5,
                                        width: 200,
                                    }}
                                >
                                    <Tab label="Home" value="1" sx={{ color: '#2e3033', fontSize: '16px', marginBottom: 3 }} />
                                    <Tab label="Sobre" value="2" sx={{ color: '#2e3033', fontSize: '16px', marginBottom: 3 }} />
                                    <Tab label="Estrutura" value="3" sx={{ color: '#2e3033', fontSize: '16px', marginBottom: 3 }} />
                                    <Tab label="Contato" value="4" sx={{ color: '#2e3033', fontSize: '16px', marginBottom: 3 }} />
                                </Tabs>
                            </Drawer>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}
