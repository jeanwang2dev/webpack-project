import HTMLComment from 'react-html-comment';
import logo from '../img/logo.svg';

function Nav() {
    return (   
        <>  
            <HTMLComment text="Navbar" />      
            <nav className="relative container mx-auto p-6">
                <HTMLComment text="Flex container" />
                <div className="flex items-center justify-between">
                    <HTMLComment text=" Logo " />
                    <div className="pt-2">
                        <img src={logo} alt="text logo" />
                    </div>
                    <HTMLComment text=" Menu Items " />
                    <div className="hidden space-x-6 md:flex">
                        <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
                        <a href="#" className="hover:text-darkGrayishBlue">Product</a>
                        <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
                        <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
                        <a href="#" className="hover:text-darkGrayishBlue">Community</a>
                    </div>
                    <HTMLComment text=" Button " />
                    <button id="js-top-btn" className="hidden my-btn-cta md:block">Get Started</button>
                    <HTMLComment text=" Hamburger Icon " />
                    <button id="menu-btn" className="block hamburger md:hidden focus:otline-none">
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
                <HTMLComment text="Mobile Menu" />
                <div className="md:hidden">
                    <div id="menu" className="hidden absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                        <a href="#">Pricing</a>
                        <a href="#">About Us</a>
                        <a href="#">Product</a>
                        <a href="#">Careers</a>
                        <a href="#">Community</a>
                    </div>
                </div>
            </nav>
        </>   
    )
}

export default Nav;