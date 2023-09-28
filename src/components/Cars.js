import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap";
import {Section} from "./Section";

export function Cars(props) {
    const {title, cars} = props

    return <div>
        <Section title = {title} content = {cars.map(c => <Car car={c}/>)}/>
    </div>;

}

function Car(props) {
    const {car} = props;

    return <div className={"mb-4"}>
        <h2>{car.name}</h2>
        <div>{car.brand ? "merk: " + car.brand : ""}</div>
        <div>{car.type ? "type: " + car.type : ""}</div>
        <div
            style={{backgroundColor: car.color === "blauw" ? "blue" : ""}}>{car.color ? "kleur: " + car.color : ""}</div>
        <div>{car.note ? "note: " + car.note : ""}</div>
    </div>;
}