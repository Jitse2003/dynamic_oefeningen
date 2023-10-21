import {PersonsPage} from "../pages/PersonsPage";
import PropTypes from "prop-types";
import {Section} from "./Section";
import {MyCard} from "./MyCard";
import {MyButton} from "./MyButton";

export function Persons(props) {
    const {persons, title, defaultIsOpen, onDeletePerson, onEditPerson, onPersonSelected} = props;

    if (!persons) return "";

    return <div>
        <Section title={title} defaultIsOpen={defaultIsOpen}>
            {persons.map((p, i) => <Person onDeletePerson={onDeletePerson} onEditPerson={onEditPerson} onPersonSelected={onPersonSelected} key={i} person={p}/>)}
        </Section>
    </div>;
}

function Person(props) {
    const {person, onDeletePerson, onEditPerson, onPersonSelected} = props

    return <MyCard xs={4} sm={4} md={4} xxl={4}>
        <div>{onDeletePerson ? <MyButton onClick = {() => onDeletePerson(person)} >Delete</MyButton> : <div></div>} </div>
        <div>{onEditPerson ? <MyButton onClick = {() => onEditPerson(person, onPersonSelected)} >Edit</MyButton> : <div></div>} </div>
        <h3>{person.name}</h3>
        <div>{person.age}</div>
        <div>{person.city}</div>
    </MyCard>;
}

Persons.propTypes = {
    title: PropTypes.string.isRequired,
    persons: PropTypes.array
}