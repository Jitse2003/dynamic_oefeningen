import './App.css';
import {MenuProduct} from "./components/MenuProduct";
import {PRODUCTS_DATA} from "./data/data";

function App() {
    return (

        <div className="App">
            <h1>Menu</h1>
            {PRODUCTS_DATA.map(p => <MenuProduct key={p.name} product={p}/>)}

        </div>
    );
}
export default App;
