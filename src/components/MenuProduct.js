export function MenuProduct(props) {
    const {product} = props;

    if (!product?.name) return;

    return <div style={{display:"flex", marginRight:"20em"}}> <span style={{flex:"auto", }}> {product.name} <span style={{fontSize:"smaller", color: "blue"}}>{product.size ? "(" + product.size + "CL)" : ""}</span> </span>  {product.price}€</div>;
}
