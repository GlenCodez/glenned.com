import './Typewriter.css';
import {useEffect, useRef} from "react";

type TypewriterProps = {
    comment?: string
    data: {
        [key:string]: string
    },
    name: string
}

function Typewriter({comment, data, name}:TypewriterProps){

    return (
        <div className="typewriter">
            <code id="typed">
                        {comment && <><span className="code_comment">// {comment}</span><br/></>}
                        <span className="code_selector">{name} = </span> <span className="code_braces">&#123;</span><br/>
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
    )
}

export default Typewriter

