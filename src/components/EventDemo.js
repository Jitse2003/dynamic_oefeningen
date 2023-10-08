import {Button} from "react-bootstrap";
import {Section} from "./Section";

export function EventDemo(props) {
   const {defaultIsOpen} = props;
    return <div>
        <div>
            <button onClick={e => {
                alert(`${e.clientY}, ${e.clientX}`)
            }}>events
            </button>
            <Button onClick={() => {
                alert('test')
            }}>events</Button>
        </div>
        <div style={{backgroundColor: "red"}} onClick={() => {alert('div is clicked')}}>

            <p>Dit is een div.</p>
            <a href={"google.be"} onClick={(e) => {e.preventDefault();alert("link is clicked!")}}>dit is een link met een href</a>
               <div>
                   <Button onClick={(e) => {e.stopPropagation()}}>
                       Dit is een button
                   </Button>
               </div>
        </div>
    </div>
}

