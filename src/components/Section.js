import {Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";

export function Section(props) {
    const {title, content} = props

    return <div>
        <h2>{title}</h2>
        <Container>
            <Row>
                {content}
            </Row>
        </Container>
    </div>;

}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
}