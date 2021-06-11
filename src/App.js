
import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import Header from './components/Header';

function App() {

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (

  <ThemeProvider theme={darkTheme}>
       <Container >
           <Header />
       </Container>
  </ThemeProvider>
 
  )
}

export default App;
