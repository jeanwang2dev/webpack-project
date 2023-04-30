/**
 * my css & scss
 */
// import '../styles/index.scss';
import './styles/style.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Cta from './components/Cta';
import Footer from './components/Footer';
//import Customdata from './components/Customdata';

const App = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Feature />
            <Cta />
            <Footer />
        </>
    )
}

export default App;