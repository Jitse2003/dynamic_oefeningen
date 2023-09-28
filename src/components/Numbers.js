import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";

export function Numbers(props) {
    const {title, numbers} = props;

    return <div className={"container text-center"}>
        <h3 className={"mb-5 mt-5"}>{title}</h3>
        <Row>
            {numbers.map(i => <Number number={i}/>)}
        </Row>

    </div>;
}

function Number(props){
    const {number} = props
    return <Col sm={4} className={"col-3"}>
            {number}
        </Col>;
}