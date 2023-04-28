import React from 'react';
// import reactLogo from '../img/logo.svg';

function Nav() {
    return (      
        <nav className="flex justify-between items-center py-8 pl-6 bg-gray-400">
            <div className="flex justify-start">
                <h3 className="text-primaryBlue">ReactFacts</h3>
            </div>
            <h4 className="text-white mr-7">React course - Project 1</h4>
        </nav>        
    )
}

export default Nav;