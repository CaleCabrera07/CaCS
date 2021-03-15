import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

//components
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ScrollToTop from './components/ScrolltoTop';

//styles
import './App.css';

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/products' exact component={Products} />
                    <Route path='/services' exact component={Services} />
                    <Route path='/about' exact component={About} />
                    <Route path='/contact' exact component={Contact} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
