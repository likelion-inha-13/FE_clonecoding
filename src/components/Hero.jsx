import React from "react";
import "../styles/hero.css"

const Hero = () => {
    return(
        <section className="hero">
            <div className="container">
                <h1 className="hero-title">Album example</h1>
                <p className="hero-subtitle">
                    Something short and leading about the collection below — its contents,<br/>
                    the creator, etc. Make it short and sweet, but not too short so folks don't<br/>
                    simply skip over it entirely.
                </p>

                <div className="btn-group">
                    <button className="left-button">
                        Main call to action
                    </button>

                    <button className="right-button">
                        Secondary action
                    </button>
                </div>
                    
            </div>
        </section>
    )
}

export default Hero;