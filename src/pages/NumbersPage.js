import {NUMBER_DATA} from "../data/data";
import {Numbers} from "../components/Numbers";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";


export function NumbersPage(props) {
    const {numbers} = props;
    return (

        <div>
            <Numbers title={"alle getallen"} numbers={numbers} defaultIsOpen={true}/>
            <Numbers title={"getallen > 6"} numbers={numbers.filter(n => n > 6)}/>
            <Numbers title={"getallen * 2"} numbers={numbers.map(n => n ** 2)}/>
        </div>
    );
}