import React from "react";

const HomePage: React.FC = () => {
    return (
        <>
            <div className="banner">
                <img className="banner-bg" alt="banner background" src="https://tripscout.co/assets/theme/marketing/landing_hero-817ff0d6aaa52de5fc32e1d0edb540dacbfcc106b6942839ce3d41338817743d.png"/>
                <div className="banner-content">
                    <h1>Tripscout</h1>
                    <p>Your personalized, always up-to-date travel guide!</p>
                </div>
            </div>
        </>
    )    
}

export default HomePage;