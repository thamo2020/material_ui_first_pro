
import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import FeaturedPost from './components/FeaturedPost';
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
           <FeaturedPost />
       </Container>
  </ThemeProvider>
 
  )
}

export default App;
