import 'bootstrap/dist/css/bootstrap.min.css';

export function Cars(props) {
    const {title, cars} = props

    return <div>
        <h2>{title}</h2>
        <div>
            {cars.map(c => <Car car = {c}/>)}
        </div>
    </div>;

}

function Car(props) {
    const {car} = props;

    return <div>
        <h2>{car.name}</h2>
        <div>{"merk: " + car.brand}</div>
        <div>{"type: " + car.type}</div>
        <div>{"kleur: " + car.color}</div>


    </div>;
}