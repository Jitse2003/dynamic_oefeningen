import {MyCard} from "./MyCard";
import {Section} from "./Section";

export function Cities(props){
    const {title, cities} = props;
    return <Section title={title}>
        {cities.map(c => <City city={c}/>)}
    </Section>
}

function City(props){
    const {city} = props;

    return <MyCard xs = {4} sm = {4} md = {4} xxl = {4}>
        <p>{city.city}</p>
        <p>{city.numberOfPersons}</p>
    </MyCard>;
}