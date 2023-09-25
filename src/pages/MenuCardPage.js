import {PRODUCTS_DATA} from "../data/data";
import {MenuCard} from "../components/MenuCard";

export function MenuCardPage(){
    return(
        <div>
            <MenuCard products={PRODUCTS_DATA}/>
        </div>
    );
}