import {Persons} from "../components/Persons";
import {useState} from "react";

export function SearchPersonsPage(props){
    const {persons} = props;
    const [searchText, setSearchText] = useState();

    const filteredPersons = persons.filter(
        (person) =>
            person.name.toLowerCase().includes(searchText) ||
            person.city.toLowerCase().includes(searchText)
    );

    return <div>
        <div className="mx-3">
            <div className="m-3">
                <label htmlFor="search">Search: </label>
                <input
                    id="search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
        </div>
        <Persons title={"alle personen"} persons={filteredPersons} defaultIsOpen={true} />
    </div>

}