import {WikiTexts} from "../components/WikiTexts";

export function WikiPage(props) {
    const {wikitexts} = props;


    return <div>
        <WikiTexts wikitexts={wikitexts}/>
    </div>
}