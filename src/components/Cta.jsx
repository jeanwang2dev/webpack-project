import HTMLComment from 'react-html-comment';

function Cta() {
    return (
        <>
            <HTMLComment text=" CTA Section" />
            <section id="cta" className="bg-brightRed">
                <HTMLComment text=" Flex Container" />
                <div className="flex flex-col container items-center justify-between mx-auto px-6 py-12 space-y-12 md:py-12 md:flex-row md:space-y-0">
                    <HTMLComment text=" Heading" />
                    <h2 className="max-w-md text-4xl text-center text-white font-bold leading-tight text-4xl md:text-left md:text-4xl">Simplify how your team works today.</h2>
                    <HTMLComment text=" Button" />
                    <a href="#" className="bg-white shadow-2xl text-brightRed rounded-full p-3 py-2 px-5 baseline hover:bg-gray-300">Get Started</a>
                </div>

            </section>            
        </>
    );
}

export default Cta;