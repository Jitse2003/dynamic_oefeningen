import {Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {useState} from "react";
import {MyButton} from "./MyButton";

export function Section(props) {
    const {title, children, defaultIsOpen} = props;
    const [isOpen, setIsOpen] = useState(defaultIsOpen)

    return (
        <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <Container>
                <MyButton onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>{isOpen ? "-" : "+"}</MyButton>
                <div>
                    <h2 className={"text-center"}>{title}</h2>
                    <Row>
                        {isOpen ? children : ""}
                    </Row>
                </div>

            </Container>
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}