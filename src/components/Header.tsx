import React from "react";
import { AppBar, Drawer, List, ListItem, Toolbar, Typography, useMediaQuery, useTheme, IconButton, Stack, Box, Button, Avatar, Tab, Tabs } from "@mui/material";

import { TabList, TabContext } from '@mui/lab';

import MenuIcon from "@mui/icons-material/Menu";

import {Montserrat} from 'next/font/google'
import { useRouter } from "next/router";

const font = Montserrat({
    subsets: ['latin']
});

export function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isOpen, setIsOpen] = React.useState(false);

    const router = useRouter();

    const [value, setValue] = React.useState('1')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };


    return (
        <AppBar position="fixed" sx={{ background: '#67B1B4' }}>
            <Toolbar sx={{mx:'5px'}}>
                <Stack direction='row' sx={{ flexGrow: 1 }} alignItems="center">
                    <Avatar src="logo.png" sx={{width:'80px', height: '50px', cursor: 'pointer'}}onClick={() => {
            router.push("/");
          }}/>
                    <Typography
                        sx={{
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            display: 'flex',
                            marginLeft: 2,
                            fontSize: {
                                xs: '15px', 
                                sm: 'large', 
                                md: '20px',
                                lg: 'x-large'
                            }
                        }}
                        className={font.className}
                    >
                        Missão Bom Jardim
                    </Typography>
                </Stack>


            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Stack direction='row' spacing={2}>
                        <Tabs 
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="secondary"
                            variant="fullWidth"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: 'black' 
                                }
                            }}
                            sx={{
                                "& .Mui-selected": {
                                    color: 'Black', // Cor do texto da aba selecionada
                                },
                            }}

                            >
                                <Tab label="Home" value="1" sx={{ color: 'white'}}/>
                                <Tab label="Sobre" value="2" sx={{ color: 'white' }}/>
                                <Tab label="Sobre" value="3" sx={{ color: 'white' }}/>
                                <Tab label="Contato" value="4" sx={{ color: 'white' }}/>
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
                                TabIndicatorProps={{
                                    style: {
                                        backgroundColor: 'black' 
                                        
                                    }
                                }}
                                sx={{
                                    "& .Mui-selected": {
                                        color: '#000000',
                                        fontSize: '22px',
                                        marginBottom: 3
                                    },
                                    borderRight: 2, borderColor: 'divider',
                                    marginTop: 5,
                                    width:200,
                                    
                                }}

                            >
                                <Tab label="Home" value="1" sx={{ color: '#2e3033', fontSize: 'large', marginBottom: 3}}/>
                                <Tab label="Sobre" value="2" sx={{ color: '#2e3033',fontSize: 'large', marginBottom: 3}}/>
                                <Tab label="Estrutura" value="3" sx={{ color: '#2e3033', fontSize: 'large', marginBottom: 3}}/>
                                <Tab label="Contato" value="4" sx={{ color: '#2e3033', fontSize: 'large', marginBottom: 3}}/>
                            </Tabs>
                    </Drawer>
                </>
            )}
        </Toolbar>
        </AppBar >
    );
}


