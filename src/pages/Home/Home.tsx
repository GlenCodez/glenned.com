import React from 'react';
import Typewriter from "../../components/Typewriter/Typewriter";
import AppConfig from "../../config";

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
                        <Typewriter data={AppConfig.home.codeBox1} />
                    </div>
                    <div className="lr-box2">
                        <Typewriter data={AppConfig.home.codeBox2} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
