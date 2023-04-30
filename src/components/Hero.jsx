import HTMLComment from 'react-html-comment';
import intro from '../img/illustration-intro.png';

function Hero() {
    return (
        <>
            <HTMLComment text="Hero Section"/>
            <section id="hero">
                <HTMLComment text="Flex Container"/>
                <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row ">
                    <HTMLComment text="Left item"/>
                    <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                        <h1 className="max-w-md text-4xl font-bold leading-tight text-center md:text-5xl md:text-left">Bring everyone together to build better products</h1>
                        <p className="max-w-sm text-darkGrayishBlue text-lg text-center md:text-left">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view</p>
                        <div className="flex justify-center md:justify-start">
                            <button className="my-btn-cta">Get Started</button>
                        </div>
                    </div>
                    <HTMLComment text="Image"/>
                    <div className="md:w-1/2">
                        <img src={intro} alt="data graphs " />
                    </div>

                </div>
            </section>
        </>
    );
}

export default Hero;