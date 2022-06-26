import React from 'react';
import CodeBox from "../../components/CodeBox/CodeBox";
import AppConfig from "../../../config";

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
                        <CodeBox data={AppConfig.home.codeBox1} />
                    </div>
                    <div className="lr-box2">
                        <CodeBox data={AppConfig.home.codeBox2} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
