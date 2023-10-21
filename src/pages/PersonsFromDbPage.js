import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection, orderBy, query, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';
import {Persons} from "../components/Persons";
import {useState} from "react";
import {PersonFormEdit} from "../components/PersonFormEdit";


const personConverter = {
    toFirestore: function (dataInApp) {
        return {
            name: dataInApp.name,
            age: Number(dataInApp.age),
            city: dataInApp.city
        }
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref}
    }
}

export function PersonsFromDbPage() {
    const collectionRef = collection(firestoreDB, 'persons').withConverter(personConverter);
    const queryRef = query(collectionRef, orderBy("name"));
    const [values, loading, error] = useCollectionData(queryRef);
    const [testInput, setTestInput] = useState();

    const [personSelected, setPersonSelected] = useState();
    const [show, setShow] = useState(false);

    console.log({values, loading, error});

    const [searchText, setSearchText] = useState("");
    if (!values) return <div></div>

    return (
        <>
            <button onClick={() => addDummyPerson()}>Add</button>
            <button onClick={() => incrementAllAges(values)}>Increment</button>
            <button onClick={() => decrementAllAges(values)}>Decrement</button>


            {personSelected ? <PersonFormEdit setPersonSelected={setPersonSelected} personSelected={personSelected}
                                              editPersonSave={editPersonSave}></PersonFormEdit> : ""}

            <div>Persons from db</div>
            <Persons title={"alle personen"} onDeletePerson={deletePerson} onEditPerson={editPerson}
                     defaultIsOpen={true}
                     onPersonSelected={setPersonSelected}
                     persons={values}/>
        </>
    )
}

async function addDummyPerson() {
    const collectionRef = collection(firestoreDB, 'persons').withConverter(personConverter);

    const dummyPerson = {name: "DUMMY", age: 19, city: "Mechelen"}
    try {
        await addDoc(collectionRef, dummyPerson);
        console.log('add dummy person done');
        alert('GELUKT')
    } catch {
        console.log("ERROR add dummy person NOT done");
        alert('NIET GELUKT')

    }
}

function deletePerson(person) {
    try {
        deleteDoc(person.ref, person);
        console.log('delete person done');
        alert('GELUKT')
    } catch {
        console.log("ERROR delete dummy person NOT done");
        alert('NIET GELUKT')

    }
}

async function incrementAllAges(persons) {
    try {
        const arrayOfPromises = persons.map(person =>
            updateDoc(person.ref, {age: person.age + 1}));
        Promise.all(arrayOfPromises)
        console.log('increment all persons person done');
        alert('GELUKT')
    } catch {
        console.log("increment all persons person NOT done");
        alert('NIET GELUKT')

    }

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


