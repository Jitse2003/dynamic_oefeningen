import {Card, Col} from "react-bootstrap";
import PropTypes from "prop-types";


export function MyCard(props) {
    const {children, xs, sm, md, xxl} = props;

    return (
        <Col xs={xs} sm={sm} md={md} xxl={xxl} className={"text-center "}>
            <Card className="m-2 p-2 shadow-sm">
                {children}
            </Card>
        </Col>
    );
}

MyCard.propTypes = {
    children: PropTypes.node.isRequired,
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number.isRequired,
    md: PropTypes.number.isRequired,
    xxl: PropTypes.number.isRequired,
}