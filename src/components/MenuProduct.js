export function MenuProduct(props) {
    const {productName} = props;
    const {productPrice} = props;
    return <div>{productName} {productPrice}€</div>;
}