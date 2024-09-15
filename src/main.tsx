import { StrictMode } from 'react';

import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';

import GlobalStyles from '@/styles/GlobalStyles';
import theme from '@/styles/theme';

import Chat from './pages/Chat';

import './index.css';



const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Chat />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
