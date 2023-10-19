import {collection, orderBy, query} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useState} from "react";
import {MenuProduct} from "../components/MenuProduct";
import {MenuCard} from "../components/MenuCard";

const productConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
}
export function MenuProductsFromDbPage(){
    const collectionRef = collection(firestoreDB, 'product').withConverter(productConverter);
    const queryRef = query(collectionRef, orderBy("sequence"));

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
            <div>Products from db</div>
            <MenuCard products={values.filter((v) => (v.name).toLowerCase().includes(searchText.toLowerCase()))}
                  defaultIsOpen={true}/>

        </>
    )
}