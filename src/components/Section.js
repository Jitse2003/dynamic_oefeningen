import {Col, Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";

export function Section(props) {
    const {title, children} = props;

    return (
        <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <Container>
                <h2 className={"text-center"}>{title}</h2>
                <Row>
                    {children}
                </Row>
            </Container>
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
}