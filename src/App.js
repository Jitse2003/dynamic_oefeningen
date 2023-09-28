import './App.css';

import {CAR_DATA, NUMBER_DATA, PRODUCTS_DATA} from "./data/data";
import {PicturesPage} from "./pages/PicturesPage";
import normalize from "normalize.css"
import {MenuCardPage} from "./pages/MenuCardPage";
import {NumbersPage} from "./pages/NumbersPage";
import {CarsPage} from "./pages/CarsPage";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>Menu Card Page</Tab>
                <Tab>Pictures Page</Tab>
                <Tab>Numbers Page</Tab>
                <Tab>Cars Page</Tab>
            </TabList>
            <TabPanel>
                <MenuCardPage products={PRODUCTS_DATA}/>
            </TabPanel>
            <TabPanel>
                <PicturesPage/>
            </TabPanel>
            <TabPanel>
                <NumbersPage numbers={NUMBER_DATA}/>
            </TabPanel>
            <TabPanel>
                <CarsPage cars={CAR_DATA}/>
            </TabPanel>
        </Tabs>

    );
}

export default App;
