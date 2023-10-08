import {MyButton} from "./MyButton";
import {Section} from "./Section";
import {useState} from "react";

export function Counter(props) {
    const {name} = props
    const [counter, setCounter] = useState(0);

    return <div className={"border-1 border-black"}>
        <p>de waarde van de {name} is {counter}</p>
        <MyButton onClick={() => setCounter(0)}>Clear</MyButton>
        <MyButton onClick={() => setCounter(counter - 1)}>-</MyButton>
        <MyButton onClick={() => setCounter(counter + 1)}>+</MyButton>
    </div>
}