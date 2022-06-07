import './Typewriter.css';
import {useEffect, useRef} from "react";

type TypewriterProps = {
    data: string
}

function Typewriter({data}:TypewriterProps){
    const typewriterDataRef = useRef(null)
    const containers = [
        (<div className="typewriter-block"></div>)
    ];

    useEffect(() => {
        const typewriterElement = typewriterDataRef.current;
        console.log(typewriterElement)
    }, [])

    return (
        <div className="typewriter">
            <div className="typewriter-data" ref={typewriterDataRef}>
                <h3>Typewriter</h3>
                <p>{data}</p>
            </div>
        </div>
    )
}

export default Typewriter

