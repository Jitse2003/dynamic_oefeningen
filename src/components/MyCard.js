import {Card, Col} from "react-bootstrap";
import PropTypes, {number} from "prop-types";


export function MyCard(props) {
    const {children, xs, sm, md, xxl, onSelectNumber, isMarked, onMarkedNumber} = props;

    return (
        <Col xs={xs} sm={sm} md={md} xxl={xxl} className={"text-center "}>
            <Card
                onClick={() => onSelectNumber ? onSelectNumber(children) : alert(children)}
                className="m-2 p-2 shadow-sm text-center"
                style={isMarked ? {backgroundColor: "orange"} : {backgroundColor: "white"}}
            >
                {children}
            </Card>
        </Col>
    );
}

MyCard.propTypes = {
    children: PropTypes.node.isRequired,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    xxl: PropTypes.number,
}