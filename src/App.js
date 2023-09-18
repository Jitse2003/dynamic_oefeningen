import './App.css';
import {MenuProduct} from "./components/MenuProduct";

function App() {
    return (

        <div className="App">
            <h1>Menu</h1>
            <MenuProduct productName="Cola"/>
            <MenuProduct productName="Water"/>
            <MenuProduct productName="Bier"/>
            <MenuProduct productName="Wijn"/>
            <MenuProduct productName="Test"/>
        </div>
    );
}
export default App;
