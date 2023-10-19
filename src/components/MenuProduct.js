import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

export function MenuProduct(props) {
    const {product} = props;

    if(!product) return "";

    return <div className={"container"}>
        <div className={"row mt-3 g-0"}>

            <div className={"col-3"}>
                {product.name}
                <span className={"text-primary small"}>
                    <ProductSize product={product}/>
                <ProductNote product={product}/>
                </span>

            </div>
            <div className={"col-auto"}>{product.price}€</div>
        </div>

    </div>;
}

MenuProduct.propTypes = {
    props: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        note: PropTypes.string
    })
}

function ProductSize(props) {
    const {product} = props;

    return product.size ? "(" + product.size + "CL)" : "";
}

function ProductNote(props) {
    const {product} = props;

    return <div>{product.note ? product.note : ""}</div>


}