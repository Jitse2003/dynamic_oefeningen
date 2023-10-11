import {Section} from "../components/Section";
import {Numbers} from "../components/Numbers";
import {useState} from "react";

export function FavoriteNumberPage(props)
{
    const [favorite,setFavorite] = useState();

    const {numbers} = props;
    return <div>
        <Numbers markedNumber={favorite} onSelectNumber={setFavorite} defaultIsOpen={true} title={'alle getallen'} numbers={numbers}></Numbers>
        <p>Mijn favoriete getal is {favorite?favorite:'(nog niet gekozen)'}</p>
    </div>
}