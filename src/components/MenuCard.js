import {PRODUCTS_DATA} from "../data/data";
import {MenuProduct} from "./MenuProduct";

export function MenuCard(props) {
    const {products} = props;

    return <div>
            <h1>Menu</h1>
            {products.map(p => <MenuProduct key={p.name} product={p}/>)}
           </div>
}