import {MyButton} from "./MyButton";
import {useState} from "react";

export function OnOffDemo(props) {
    const {name} = props
    const [isOn, setIsOn] = useState(false);

    return <div className={"border-1 border-black"}>
        <p>de waarde voor isOn is: {isOn ? "On" : "Off"}</p>
        <MyButton onClick={() => isOn ? setIsOn(false) : setIsOn(true)}>toggle</MyButton>
        <MyButton onClick={() => setIsOn(true)}>On</MyButton>
        <MyButton onClick={() => setIsOn(false)}>Off</MyButton>
    </div>



}