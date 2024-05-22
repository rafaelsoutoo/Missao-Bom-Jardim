// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

const font = Montserrat({
  subsets: ['latin'],
});

export const fontFamily = font.className;

export const theme = createTheme({
  typography: {
    fontFamily: fontFamily, // Aqui estamos usando fontFamily, que contém a classe de fonte
  },
});
