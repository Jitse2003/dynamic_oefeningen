import {PersonsPage} from "../pages/PersonsPage";
import PropTypes from "prop-types";
import {Section} from "./Section";
import {MyCard} from "./MyCard";

export function Persons(props){
    const {persons, title, defaultIsOpen} = props;

    if(!persons) return "";

    return <div>
        <Section title = {title} defaultIsOpen={defaultIsOpen}>
            {persons.map((p, i) => <Person key={i} person={p}/>)}
        </Section>
    </div>;
}

function Person(props){
    const {person} = props
    return <MyCard xs = {4} sm = {4} md = {4} xxl = {4}>

       <h3>{person.name}</h3>
        <div>{person.age}</div>
        <div>{person.city}</div>
    </MyCard>;
}

Persons.propTypes = {
    title: PropTypes.string.isRequired,
    persons: PropTypes.array
}