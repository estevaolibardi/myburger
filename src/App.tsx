import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}></ThemeProvider>
    </>
  );
}

export default App;
