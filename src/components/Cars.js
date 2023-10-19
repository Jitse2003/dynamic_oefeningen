import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap";
import {Section} from "./Section";
import {MyCard} from "./MyCard";

export function Cars(props) {
    const {title, cars, defaultIsOpen} = props

    if(!cars) return "";

    return <div>
        <Section title={title} defaultIsOpen={defaultIsOpen}>
            {cars.map(i => <Car car={i}/>)}
        </Section>
    </div>;

}

function Car(props) {
    const {car} = props;

    return <MyCard xs = {4} sm = {4} md = {4} xxl = {4}>
        <h2>{car.name}</h2>
        <div>{car.brand ? "merk: " + car.brand : ""}</div>
        <div>{car.type ? "type: " + car.type : ""}</div>
        <div
            style={{backgroundColor: car.color === "blauw" ? "blue" : ""}}>{car.color ? "kleur: " + car.color : ""}</div>
        <div>{car.note ? "note: " + car.note : ""}</div>
    </MyCard>;
}