import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <main className='py-3'>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/products/:id' component={ProductScreen} />
          <Route exact path='/cart/:id?' component={CartScreen} />
        </main>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
