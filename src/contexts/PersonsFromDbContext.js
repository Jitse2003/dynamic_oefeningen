import React, {createContext, useCallback, useContext, useMemo} from 'react';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {addDoc, collection, deleteDoc, orderBy, query, updateDoc} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useMessageContext} from "./messageContext";

const PersonsFromDbContext = createContext();

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

export function PersonsFromDbProvider(props) {
    const {message, setMessage, clearMessage} = useMessageContext();

    const collectionRef = useMemo(() => collection(firestoreDB, 'persons').withConverter(personConverter), []);
    const queryRef = useMemo(() => query(collectionRef, orderBy("name")), [collectionRef]);

    const [persons, loading, error] = useCollectionData(queryRef);


    const addDummyPerson = useCallback(async () => {
        const dummyPerson = {name: "DUMMY", age: 19, city: "Mechelen"}

        try {
            await addDoc(collectionRef, dummyPerson);
            setMessage("add dummy person done");
            // alert('GELUKT')
        } catch {
            setMessage("ERROR add dummy person NOT done");
            // alert('NIET GELUKT')
        }
    }, [setMessage]);


    const incrementAllAges = useCallback(async () => {
        try {
            persons.map(person =>  updateDoc(person.ref, {age: person.age + 1}));
            setMessage('increment all persons person done');
            // alert('GELUKT')
        } catch (e) {
            console.log(e)
            setMessage("increment all persons person NOT done");
            // alert('NIET GELUKT')

        }
    }, [setMessage, persons]);

    const deletePerson = useCallback(async (person) => {
            try {
                deleteDoc(person.ref, person);
                setMessage('delete person done');
                alert('GELUKT')
            } catch {
                setMessage("ERROR delete dummy person NOT done");
                alert('NIET GELUKT')

            }
    }, [setMessage])

    const api = useMemo(() => ({
        persons,
        loading,
        error,
        addDummyPerson,
        incrementAllAges,
        deletePerson,
    }), [persons, loading, error, addDummyPerson, incrementAllAges, deletePerson]);

    return (
        <PersonsFromDbContext.Provider value={api}>
            {props.children}
        </PersonsFromDbContext.Provider>
    );
}

export const usePersonsFromDbContext = () => useContext(PersonsFromDbContext);