import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection} from 'firebase/firestore';
import {Persons} from "../components/Persons";
import {useState} from "react";


const personConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
}

export function PersonsFromDbPage() {
    const query = collection(firestoreDB, 'persons').withConverter(personConverter);
    const [values, loading, error] = useCollectionData(query);
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
                <div>Persons from db</div>
                <Persons title={"alle personen"}
                         persons={values.filter((v) => (v.name).toLowerCase().includes(searchText.toLowerCase()))}
                         defaultIsOpen={true}/>

            </>
        )
}

