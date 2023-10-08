import {useState} from "react";
import {Section} from "./Section";
import {Button} from "react-bootstrap";
import {MyButton} from "./MyButton";
import {Counter} from "./Counter";
import {OnOffDemo} from "./OnOffDemo";

export function StateDemo() {
    const [demoValue, setDemoValue] = useState(0)

    return <Section title={"state"}>
        <DemoValue demoValue = {demoValue} onDemoValueChanged ={setDemoValue}/>
        <Counter></Counter>
        <Counter></Counter>
        <OnOffDemo></OnOffDemo>
        <DemoValueReadonly demoValue={demoValue}/>
        <DemoValueIncrement demoValue = {demoValue} onDemoValueChanged ={setDemoValue}/>
    </Section>
}

function DemoValue(props){
    const {demoValue, onDemoValueChanged} = props
    return <div>
        <div>De waarde van de demo value is {demoValue}</div>
        <div>De waarde van de demo value is {demoValue}</div>
        <MyButton onClick={() => onDemoValueChanged(77)}> SET 77</MyButton>
        <MyButton onClick={() => onDemoValueChanged(0)}> SET 0</MyButton>
        <MyButton onClick={() => onDemoValueChanged(184)}> SET 184</MyButton>
    </div>

}
function DemoValueReadonly(props){
    const {demoValue} = props;

    return <div>
        demoValue = {demoValue}
    </div>
}

function DemoValueIncrement(props) {
    const {demoValue, onDemoValueChanged} = props;

    return <div>
        <MyButton onClick={() => onDemoValueChanged(demoValue + 1)}>demoValue increment</MyButton>
    </div>
}