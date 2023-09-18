export function MenuProduct(props) {
    const {product} = props;

    if (!product?.name) return;

    return <div>{product.name} {product.size ? "(" + product.size + "CL)" : "" } {product.price} €</div>;
}
