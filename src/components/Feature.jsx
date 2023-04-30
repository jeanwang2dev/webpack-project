import HTMLComment from 'react-html-comment';

function Feature() {
    return (
        <>
            <HTMLComment text=" Features Section " />
            <section id="features">
                <HTMLComment text=" Flex container " />
                <div className="flex container flex-col px-6 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                    <HTMLComment text=" What's Different " />
                    <div className="flex flex-col space-y-12 md:w-1/2">
                        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                            What's different about Manage?
                        </h2>
                        <p className="max-w-sm text-darkGrayishBlue text-lg text-center md:text-left">
                            Manage provides all the functionality your team needs, without the complexity. our software is tailor-made for modern digital product teams
                        </p>
                    </div>
                    <HTMLComment text=" Numbered List " />
                    <div className="flex flex-col space-y-8 md:w-1/2">
                        <HTMLComment text=" List Item 1 " />
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <HTMLComment text=" Heading" />
                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2 md:flex-row">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">01</div>
                                    <h3 className="text-base font-bold pr-3 md:mb-4 md:hidden">Track company-wide progress</h3>
                                </div>
                            </div>
                            <HTMLComment text=" Content" />
                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">Track company-wide progress</h3>
                                <p className="text-darkGrayishBlue">
                                    See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone leve all the way down to the smallest of details. Never lose sight of the bigger picture again.                                
                                </p>                        
                            </div>
                        </div>
                        <HTMLComment text=" List Item 2 " />
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <HTMLComment text=" Heading" />
                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2 md:flex-row">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">02</div>
                                    <h3 className="text-base font-bold pr-3 md:mb-4 md:hidden">Advanced built-in reports</h3>
                                </div>
                            </div>
                            <HTMLComment text=" Content" />
                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">Advanced built-in reports</h3>
                                <p className="text-darkGrayishBlue">
                                    See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone leve all the way down to the smallest of details. Never lose sight of the bigger picture again.                                
                                </p>                        
                            </div>
                        </div>
                        <HTMLComment text=" List Item 3 " />
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <HTMLComment text=" Heading" />
                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2 md:flex-row">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">03</div>
                                    <h3 className="text-base font-bold pr-3 md:mb-4 md:hidden">Everything you need in one place</h3>
                                </div>
                            </div>
                            <HTMLComment text=" Content" />
                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">Everything you need in one place</h3>
                                <p className="text-darkGrayishBlue">
                                    Stop jumping from one service to another to communicate, store
                                    files, track tasks and share documents. Manage offers an
                                    all-in-one team productivity solution.                               
                                </p>                        
                            </div>
                        </div>                
                    </div>
                </div>

            </section>
        </>
    );
}

export default Feature;