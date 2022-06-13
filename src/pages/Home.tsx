import React from 'react';
import Typewriter from "../components/Typewriter/Typewriter";

function Home() {
    return (
        <div>
            <section className="landing">
                <div className="landing-left">

                </div>
                <div className="landing-right">
                    <h1 className="home-h1">Hello</h1>
                    <h3 className="home-h3">I'm Glen</h3>
                    <Typewriter data={{First: "Glen", Last: "Burchfield"}} />
                    <Typewriter data={{Profession: "Software Engineer", Expert: "Node.js"}} />
                </div>
            </section>
            <section className="timeline">
                <h1>Timeline.</h1>
            </section>
        </div>
    )
}

export default Home
