/**
 * my css & scss
 */
// import '../styles/index.scss';
import './styles/style.css';
import Nav from './components/Nav';
import Customdata from './components/Customdata';

const App = () => {
    return (
        <div className="container mx-auto">
            <Nav />
            <Customdata />
        </div>
    )
}

export default App;