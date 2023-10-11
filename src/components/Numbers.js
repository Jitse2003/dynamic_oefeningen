import PropTypes from "prop-types";
import {MyCard} from "./MyCard";
import {Col} from "react-bootstrap";
import {Section} from "./Section";


function Number(props) {
    const {number,onSelectNumber,onMarkedNumber,isMarked} = props;
    return (
        <Col xs={4} sm={3} md={2} xxl={1}>
            <MyCard onMarkedNumber={onMarkedNumber} isMarked={isMarked}  onSelectNumber={onSelectNumber}>{number}</MyCard>
        </Col>
    );
}

export function Numbers(props) {
    const {numbers, title,onSelectNumber,markedNumber,defaultIsOpen} = props
    return (
        <Section defaultIsOpen={defaultIsOpen} title={title}>
            {numbers.map((n, i) => <Number key={i} isMarked={n === markedNumber} onSelectNumber={onSelectNumber} number={n}/>)}
        </Section>
    );
}

Numbers.propTypes = {
    numbers: PropTypes.array,
    title: PropTypes.string
};