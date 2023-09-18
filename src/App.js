import './App.css';
import {MenuProduct} from "./components/MenuProduct";

function App() {
    return (

        <div className="App">
            <h1>Menu</h1>
            <MenuProduct productName="Cola" productPrice="1"/>
            <MenuProduct productName="Water" productPrice="1"/>
            <MenuProduct productName="Bier" productPrice="1"/>
            <MenuProduct productName="Wijn" productPrice="2"/>
            <MenuProduct productName="Cava" productPrice="3"/>
        </div>
    );
}
export default App;
