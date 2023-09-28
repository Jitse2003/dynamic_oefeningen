import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import {Section} from "./Section";

export function Numbers(props) {
    const {title, numbers} = props;

    return <div>
        <Section title = {title} content = {numbers.map(i => <Number number={i}/>)}/>
    </div>;
}

function Number(props){
    const {number} = props
    return <Col sm={4} className={"col-3"}>
            {number}
        </Col>;
}