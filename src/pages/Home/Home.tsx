import React from 'react';
import Typewriter from "../../components/Typewriter/Typewriter";

function Home() {
    return (
        <div>
            <section className="landing">
                <div className="landing-left">

                </div>
                <div className="landing-right">
                    <h1 className="home-h1">Hello</h1>
                    <h3 className="home-h3">I'm Glen</h3>
                    <div className="lr-box1">
                        <Typewriter data={{First: "Glen", Last: "Burchfield"}} name="Name" />
                    </div>
                    <div className="lr-box2">
                        <Typewriter data={{Profession: "Software Engineer", Expert: "Node.js"}} name="Profile" />
                    </div>
                </div>
            </section>
            <section className="timeline">
                <h1>Timeline.</h1>
            </section>
        </div>
    )
}

export default Home
