import {updateDoc, deleteDoc} from 'firebase/firestore';
import {Persons} from "../components/Persons";
import {useState} from "react";
import {PersonFormEdit} from "../components/PersonFormEdit";
import {useMessageContext} from "../contexts/messageContext";
import {Toast} from "react-bootstrap";
import {usePersonsFromDbContext} from "../contexts/PersonsFromDbContext";


export function PersonsFromDbPage() {
    const {message, clearMessage} = useMessageContext();
    const {persons, loading, error, addDummyPerson, incrementAllAges, deletePerson} = usePersonsFromDbContext();

    const [testInput, setTestInput] = useState();

    const [personSelected, setPersonSelected] = useState();
    const [show, setShow] = useState(false);



    console.log({persons, loading, error});

    const [searchText, setSearchText] = useState("");
    if (!persons) return <div></div>

    return (
        <>
            <Toast show={message !== ""} onClose={() => clearMessage()}>
                <Toast.Header>
                    <strong className="me-auto">Message</strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>


            <button onClick={() => addDummyPerson()}>Add</button>
            <button onClick={() => incrementAllAges()}>Increment</button>
            <button onClick={() => decrementAllAges(persons)}>Decrement</button>


            {personSelected ? <PersonFormEdit setPersonSelected={setPersonSelected} personSelected={personSelected}
                                              editPersonSave={editPersonSave}></PersonFormEdit> : ""}

            <div>Persons from db</div>
            <Persons title={"alle personen"} onDeletePerson={deletePerson} onEditPerson={editPerson}
                     defaultIsOpen={true}
                     onPersonSelected={setPersonSelected}
                     persons={persons}/>
        </>
    )
}


async function decrementAllAges(persons) {
    persons.forEach(person => updateDoc(person.ref, {age: person.age - 1}))
}

function editPerson(person, onPersonSelected) {
    onPersonSelected(person)

}

function editPersonSave(personToEdit) {
    try {
        updateDoc(personToEdit.ref, personToEdit);
        console.log("Person Saved")
    } catch {
        console.log("Person Not Saved")

    }
}


