import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useState} from "react";
import {Persons} from "../components/Persons";
import {Cars} from "../components/Cars";

const carConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
}
export function CarsFromDbPage(){
    const query = collection(firestoreDB, 'cars').withConverter(carConverter);
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
            <div>Cars from db</div>
            <Cars title={"alle cars"}
                     cars={values.filter((v) => (v.name).toLowerCase().includes(searchText.toLowerCase()))}
                     defaultIsOpen={true}/>

        </>
    )
}