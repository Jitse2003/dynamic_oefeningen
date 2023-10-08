import {findAllByDisplayValue} from "@testing-library/react";
import {Button} from "react-bootstrap";

export function MyButton(props) {
    const {onClick, children} = props;
    return <Button onClick={()=>onClick()} variant={"primary"} size={"sm"} className="ms-2 mt-1">
        {children}
    </Button>
}