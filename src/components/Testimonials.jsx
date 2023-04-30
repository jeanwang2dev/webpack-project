import HTMLComment from 'react-html-comment';
import avatarAnisha from '../img/avatar-anisha.png';
import avatarAli from '../img/avatar-ali.png';
import avatarRichard from '../img/avatar-richard.png';

function Testimonials() {
    return (
        <>
            <HTMLComment text=" Testimonials " />
            <section id="testimonials">
                <HTMLComment text=" Container to heading and testm blocks " />
                    <div className="max-w-6xl px-5 mx-auto mt-32 text-center"></div>
                        <HTMLComment text=" Heading " />
                        <h2 className="text-4xl font-bold text-center">What they've said</h2>
            
                        <div className="owl-carousel">
                            <div className="myitem"> Your Content </div>
                            <div className="myitem"> Your Content </div>
                            <div className="myitem"> Your Content </div>
                            <div className="myitem"> Your Content </div>
                            <div className="myitem"> Your Content </div>
                            <div className="myitem"> Your Content </div>
                            <div className="myitem"> Your Content </div>
                        </div>
                    
                        <HTMLComment text=" Button " />
                        <div className="flex justify-center mt-10 mb-32">
                            <a href="#" className="my-btn-cta">Get Started</a>
                        </div>
            </section>         
        </>
    );
}

export default Testimonials;