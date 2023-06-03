import HTMLComment from 'react-html-comment';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import avatarAnisha from '../img/avatar-anisha.png';
import avatarAli from '../img/avatar-ali.png';
import avatarRichard from '../img/avatar-richard.png';


const options = {
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
}

function Testimonials() {

    return (
        <>
            <HTMLComment text=" Testimonials " />
            <section id="testimonials">
                <HTMLComment text=" Container to heading and testm blocks " />
                    <div className="max-w-6xl px-5 mx-auto mt-32 text-center"></div>
                        <HTMLComment text=" Heading " />
                        <h2 className="text-4xl font-bold text-center mb-8">What they've said</h2>
                
                            <OwlCarousel className='owl-theme' {...options}>
                                
                                <div className="testimonial-item pt-10">
                                    <div className="flex flex-col items-center p-6 pt-0 space-y-6 rounded-lg bg-veryLightGray">
                                        <div className="w-16 -mt-8"><img src={avatarAnisha} alt="" /></div>
                                        <h5 className="text-lg font-bold">Anisha Li</h5>
                                        <p calss="text-sm text-darkGrayishBlue">“Manage has supercharged our team’s workflow. The ability to maintain visibility on large milestones at all times keeps everyone motivated.”</p>
                                    </div>
                                </div>

                                
                                <div className="testimonial-item pt-10">
                                    <div className="flex flex-col items-center p-6 pt-0 space-y-6 rounded-lg bg-veryLightGray"> 
                                        <div className="w-16 -mt-8"><img src={avatarAli} alt="" /></div>                           
                                        <h5 className="text-lg font-bold">Ali Bravo</h5>
                                        <p calss="text-sm text-darkGrayishBlue">“We have been able to cancel so many other everyone is much more focused.”</p>
                                    </div>
                                </div>

                            
                                <div className="testimonial-item pt-10">
                                    <div className="flex flex-col items-center p-6 pt-0 space-y-6 rounded-lg bg-veryLightGray">
                                        <div className="w-16 -mt-8"><img src={avatarRichard} alt="" /></div>
                                        <h5 className="text-lg font-bold">Richard Watts</h5>
                                        <p calss="text-sm text-darkGrayishBlue">“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                                    </div>   
                                </div>        

                            </OwlCarousel>
                    
                        <HTMLComment text=" Button " />
                        <div className="flex justify-center mt-10 mb-32">
                            <a href="#" className="my-btn-cta">Get Started</a>
                        </div>
            </section>         
        </>
    );
}

export default Testimonials;