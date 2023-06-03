import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Test() {
    return (
        <>
            
            <section id="test">
               
                <OwlCarousel className='owl-theme' loop margin={10} nav>
                    <div className="myitem"> Your Content </div>
                    <div className="myitem"> Your Content </div>
                    <div className="myitem"> Your Content </div>
                    <div className="myitem"> Your Content </div>
                    <div className="myitem"> Your Content </div>
                    <div className="myitem"> Your Content </div>
                    <div className="myitem"> Your Content </div>
                </OwlCarousel>

            </section>         
        </>
    );
}

export default Test;