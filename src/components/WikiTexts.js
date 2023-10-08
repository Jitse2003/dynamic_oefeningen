import {Section} from "./Section";
import {MyCard} from "./MyCard";

export function WikiTexts(props) {
    const {wikitexts, defaultIsOpen} = props;

    return <div className={""}>
        <Section title={""} defaultIsOpen={defaultIsOpen}>
            {wikitexts.map(w => <WikiText wikitext = {w} />)}
        </Section>
    </div>;
}

function WikiText(props) {
    const {wikitext} = props;

    return <MyCard xs={4} sm={4} md={4} xxl={4}>
        <div>
            <h1>{wikitext.title}</h1>
            <div>{wikitext.text}</div>
            <div>{wikitext.pageNumber}</div>
        </div>

    </MyCard>
}


WikiTexts.propTypes = {}