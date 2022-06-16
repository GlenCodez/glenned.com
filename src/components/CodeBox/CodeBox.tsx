import './CodeBox.css';
import {useEffect, useRef} from "react";

type TypewriterProps = {
    comment?: string
    data: {
        [key:string]: string
    }
}

function CodeBox({comment, data}:TypewriterProps){
    const {variableName} = data
    return (
        <div className="typewriter">
            <code id="typed">
                        {comment && <><span className="code_comment">// {comment}</span><br/></>}
                        <span className="code_selector">{variableName} = </span> <span className="code_braces">&#123;</span><br/>
                        {
                            Object.entries(data).map(line => {
                                const [key,value] = line
                                if(key !== "variableName") {
                                    return (
                                        <>&nbsp; &nbsp;<span className="code_property">{key}:</span><span
                                            className="code_value">{value},</span> <br/></>
                                    )
                                }
                            })
                        }
                        <span className="code_braces">&#125;</span>
        </code><span className="typed-cursor typed-cursor--blink">|</span>
        </div>
    )
}

export default CodeBox

