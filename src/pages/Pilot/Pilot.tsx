import React from 'react';

const data = {
    nato_phonetics: {
        a: 'alpha',
        b: 'bravo',
        c: 'charlie',
        d: 'delta',
        e: 'echo',
        f: 'foxtrot',
        g: 'golf',
        h: 'hotel',
        i: 'india',
        j: 'juliet',
        k: 'kilo',
        l: 'lima',
        m: 'mike',
        n: 'november',
        o: 'oscar',
        p: 'papa',
        q: 'quebec',
        r: 'romeo',
        s: 'sierra',
        t: 'tango',
        u: 'uniform',
        v: 'victor',
        w: 'whiskey',
        x: 'x-ray',
        y: 'yankee',
        z: 'zulu'
    }
}

function Pilot() {
    return (
        <div>
            <h1>Pilot</h1>
            <section>
                <h2>NATO Phonetics</h2>
                <div className="nato-phonetics-body">
                {
                    Object.entries(data.nato_phonetics).map((entry) => {
                        const [letter, code_word] = entry
                        return (
                            <div>
                                <h4>{letter}</h4>
                                <h4>{code_word}</h4>
                            </div>
                        )
                    })
                }
                </div>
            </section>
        </div>
    )
}

export default Pilot