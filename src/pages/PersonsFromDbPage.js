import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection, orderBy, query, addDoc, updateDoc, doc} from 'firebase/firestore';
import {Persons} from "../components/Persons";
import {useState} from "react";


const personConverter = {
    toFirestore: function (dataInApp){
        return {
            name: dataInApp.name,
            age: Number(dataInApp.age),
            city: dataInApp.city
        }
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id,ref:snapshot.ref}
    }
}

export function PersonsFromDbPage() {
    const collectionRef = collection(firestoreDB, 'persons').withConverter(personConverter);
    const queryRef = query(collectionRef, orderBy("name"));
    const [values, loading, error] = useCollectionData(queryRef);
    console.log({values, loading, error});

    const [searchText, setSearchText] = useState("");
    if (!values) return <div></div>

        return (
            <>
                <div className="m-3">
                    <label htmlFor="search">Search: </label>
                    <input
                        id="search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <button onClick={() => addDummyPerson()}>Add</button>
                <button onClick={() => incrementAllAges(values)}>Increment</button>
                <button onClick={() => decrementAllAges(values)}>Decrement</button>
                <div>Persons from db</div>
                <Persons title={"alle personen"}
                         persons={values.filter((v) => (v.name).toLowerCase().includes(searchText.toLowerCase()))}
                         defaultIsOpen={true}/>

            </>
        )
}

function addDummyPerson() {
    const collectionRef = collection(firestoreDB, 'persons').withConverter(personConverter);

    const dummyPerson = {name: "DUMMY", age: 19, city: "Mechelen"}
    try {
        addDoc(collectionRef, dummyPerson);
        console.log('add dummy person done');
        alert('GELUKT')
    } catch {
        console.log("ERROR add dummy person NOT done");
        alert('NIET GELUKT')

    }
}
async function incrementAllAges(persons) {
    persons.forEach(person=> updateDoc(person.ref,{age:person.age+1}))
}

async function decrementAllAges(persons) {
    persons.forEach(person=> updateDoc(person.ref,{age:person.age-1}))
}

