import {Persons} from "../components/Persons";
import {Numbers} from "../components/Numbers";
import {Cities} from "../components/Cities";


const cities = [
    {numberOfPersons : 100, city: "Antwerpen"},
    {numberOfPersons : 200, city: "Brussel"},
];

export function PersonsPage(props) {
    const {persons} = props;



    return <div>
        <Persons title={"alle personen"} persons={persons}/>
        <Persons title={"alle personen volgens leeftijd"} persons={persons.sort((a, b)=> a.age - b.age)}/>
        <Numbers title={"leeftijden"} numbers={persons.map(p => p.age)}/>
        <Numbers title={"unieke leeftijden gesorteerd"} numbers={Array.from(new Set(persons.map(p => p.age).sort()))}/>
        <Cities title={"city test"} cities={cities}/>
        <Cities title={"city test"} cities={persons}/>
    </div>
}