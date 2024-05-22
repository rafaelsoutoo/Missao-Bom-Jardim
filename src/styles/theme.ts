// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';

import { Montserrat } from 'next/font/google';

export const font = Montserrat({
  subsets: ['latin'],
});


const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
});

export default theme;
