import './Typewriter.css';
import {useEffect, useRef} from "react";

type TypewriterProps = {
    comment?: string
    data: {
        [key:string]: string
    }
}

function Typewriter({comment, data}:TypewriterProps){

    return (
        <div className="typewriter">
            <div id="sppb-addon-wrapper-1571746725182" className="sppb-addon-wrapper  sppb-wow fadeIn  sppb-animated" style={{ visibility: "visible", animationName: "fadeIn" }}>
                <div id="sppb-addon-1571746725182" className=" sppb-wow fadeIn clearfix  sppb-animated"
                     data-sppb-wow-duration="600ms" data-sppb-wow-delay="500ms"
                     style={{visibility: "visible", animationDuration: "600ms", animationDelay: "500ms", animationName: "fadeIn" }}>
                    <div className="sppb-addon sppb-addon-text-block  ">
                        <div className="sppb-addon-content" style={{height: "120px"}}>
                            <div id="typed-string" style={{display: "none"}}>
                                <code>
                                    {comment && <><span className="code_comment">// {comment}</span><br/></>}
                                    <span className="code_selector">Name</span>
                                    <span className="code_braces">&#123;</span><br/>
                                    {
                                        Object.entries(data).map(line => {
                                            const [key,value] = line
                                            return (
                                                <>&nbsp; &nbsp;<span className="code_property">{key}:</span><span className="code_value">{value};</span> <br/></>
                                            )
                                        })
                                    }
                                    <span className="code_braces">&#125;</span>
                                </code>
                            </div>
                            <code id="typed">
                                {comment && <><span className="code_comment">// {comment}</span><br/></>}
                                <span className="code_selector">Name</span> <span className="code_braces">&#123;</span><br/>
                                {
                                    Object.entries(data).map(line => {
                                        const [key,value] = line
                                        return (
                                            <>&nbsp; &nbsp;<span className="code_property">{key}:</span><span className="code_value">{value};</span> <br/></>
                                        )
                                    })
                                }
                                <span className="code_braces">&#125;</span>
                            </code><span className="typed-cursor typed-cursor--blink">|</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Typewriter

