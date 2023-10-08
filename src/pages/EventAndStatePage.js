import {EventDemo} from "../components/EventDemo";
import {Section} from "../components/Section";
import {StateDemo} from "../components/StateDemo";

export function EventAndStatePage() {
    return (
        <Section>
            <EventDemo defaultIsOpen={true}/>
            <StateDemo defaultIsOpen={true}/>
        </Section>
)
    ;
}