import 'bootstrap/dist/css/bootstrap.min.css';
import {Section} from "./Section";
import {MyCard} from "./MyCard";

export function Numbers(props) {
    const {title, numbers, defaultIsOpen} = props;

    return <div>
        <Section title = {title} defaultIsOpen={defaultIsOpen}>
            {numbers.map(i => <Number number={i}/>)}
        </Section>
    </div>;
}

function Number(props){
    const {number} = props
    return <MyCard xs = {4} sm = {4} md = {4} xxl = {4}>
        {number}
    </MyCard>
}