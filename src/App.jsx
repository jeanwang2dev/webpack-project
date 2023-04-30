/**
 * my css & scss
 */
// import '../styles/index.scss';
import './styles/style.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Cta from './components/Cta';
//import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Testcarousel from './components/Testcarousel';
//import Customdata from './components/Customdata';

const App = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Feature />
            <Testcarousel />
            <Cta />
            <Footer />
        </>
    )
}

export default App;