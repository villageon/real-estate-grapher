import '@/styles/globals.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { theme } from '@/utils/clients/muiThemeClient';

const withThemeProvider = (Story, context) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <Story {...context} />
    </MUIThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  layout: 'fullscreen',
};

