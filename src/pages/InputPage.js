import {useState} from "react";

export function InputPage() {
    const [testInput, setTestInput] = useState();

    return (
        <div className="mx-3">
            <div className="m-3">
                <label htmlFor="search">test input: </label>
                <input id="search" value={testInput} onChange={e => setTestInput(e.target.value)}/>
            </div>
            <div className="m-3">
                <label htmlFor="search">test input: </label>
                <input id="search" value={testInput} onChange={e => setTestInput(e.target.value)}/>
            </div>
            <p>De waarde is: {testInput}</p>
        </div>
    );
}