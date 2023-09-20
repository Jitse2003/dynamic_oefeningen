import PropTypes from 'prop-types';

export function MenuProduct(props) {
    const {product} = props;

    if (!product?.name) return;

    return <div style={{display: "flex", marginRight: "20em"}}><span style={{flex: "auto"}}> {product.name} <span
        style={{fontSize: "smaller", color: "blue"}}><ProductSize product={product}></ProductSize> <ProductNote
        product={product}/> </span> </span> {product.price}€</div>;
}

MenuProduct.propTypes = {props: PropTypes.shape({name:PropTypes.string, price:PropTypes.number, note:PropTypes.string})}

function ProductSize(props) {
    const {product} = props;

    return product.size ? "(" + product.size + "CL)" : "";
}

function ProductNote(props) {
    const {product} = props;

    return <div>{product.note ? product.note : ""}</div>


}