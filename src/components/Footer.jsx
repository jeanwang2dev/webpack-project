import HTMLComment from 'react-html-comment';
import facebookIcon from '../img/icon-facebook.svg';
import youtubeIcon from '../img/icon-youtube.svg';
import twitterIcon from '../img/icon-twitter.svg';
import pinterestIcon from '../img/icon-pinterest.svg';
import instagramIcon from '../img/icon-instagram.svg';
import logoWhite from '../img/logo-white.svg';


function Footer() {
    return (
        <>
            <HTMLComment text=" Footer"  />
            <footer className="bg-veryDarkBlue">
                <HTMLComment text=" Flex Container"  />
                <div className="container flex flex-col-reverse justify-between mx-auto space-y-8 px-6 py-10 md:flex-row md:space-y-0">
                    <HTMLComment text=" Logo and social links container"  />
                    <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                        <HTMLComment text=" copy right block on small screen" />
                        <div className="mx-auto my-6 text-center text-white md:hidden">
                            Copyright &copy; 2022, All Rights Reserved
                        </div>
                        <HTMLComment text=" Logo"  />
                        <img src={logoWhite} alt="" className="h-8" />
                        <HTMLComment text=" Social Links Container"  />
                        <div className="flex space-x-4 justify-center">
                            <a href="#"><img className="h-8" src={facebookIcon} alt="facebook Icon" /></a>
                            <a href="#"><img className="h-8" src={youtubeIcon} alt="youtube Icon" /></a>
                            <a href="#"><img className="h-8" src={twitterIcon} alt="twitter Icon" /></a>
                            <a href="#"><img className="h-8" src={pinterestIcon} alt="pinterest Icon" /></a>
                            <a href="#"><img className="h-8" src={instagramIcon} alt="instagram Icon" /></a>
                        </div>
                    </div>
                    <HTMLComment text=" List Container"  />
                    <div className="cloumns-2 flex-1 flex flex-col flex-wrap text-white h-40 md:w-fit md:pl-32">
                            <a href="#" className="hover:text-brightRed mb-3 mr-3">Home</a>
                            <a href="#" className="hover:text-brightRed mb-3 mr-3">Pricing</a>
                            <a href="#" className="hover:text-brightRed mb-3 mr-3">Products</a>
                            <a href="#" className="hover:text-brightRed mb-3 mr-3">About Us</a>
                            <a href="#" className="hover:text-brightRed mb-3 mr-3">Careers</a>
                            <a href="#" className="hover:text-brightRed mb-3 mr-3">Community</a>
                            <a href="#" className="hover:text-brightRed mb-3 mr-3">privacy Policy</a>
                    </div>
                    
                    <HTMLComment text=" Subscribe Container"  />
                    <div className="flex flex-col justify-between">
                        <form>
                            <div className="flex space-x-3">
                                <input 
                                    type="text" 
                                    className="flex-1 px-4 rounded-full focus:outline-none"
                                    placeholder="Updated in your inbox"
                                />
                                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight">Go</button>
                            </div>
                        </form>
                        <div className="hidden text-white md:block">Copyright &copy; 2022, All Rights Reserved</div>
                    </div>
                </div>

            </footer>            
        </>
    );
}

export default Footer;