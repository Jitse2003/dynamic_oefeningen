import {Cars} from "../components/Cars";

export function CarsPage(props) {
    const {cars} = props;
    return (
        <div>
            <Cars title={"Auto's"} cars={cars}/>
        </div>
    );
}