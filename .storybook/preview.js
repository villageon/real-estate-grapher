import '@/styles/globals.css';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { theme } from '@/utils/clients/muiThemeClient';
import { RecoilRoot } from 'recoil';

const withThemeProvider = (Story, context) => {
  return (
    <MUIThemeProvider theme={theme}>
      <RecoilRoot>
      <Story {...context} />
      </RecoilRoot>
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

