import './App.css';

import {PRODUCTS_DATA} from "./data/data";
import {PicturesPage} from "./pages/PicturesPage";
import normalize from "normalize.css"
import {MenuCardPage} from "./pages/MenuCardPage";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>Menu Card Page</Tab>
                <Tab>Pictures Page</Tab>
            </TabList>
            <TabPanel>
                <MenuCardPage products={PRODUCTS_DATA}/>
            </TabPanel>
            <TabPanel>
                <PicturesPage/>
            </TabPanel>
        </Tabs>

    );
}

export default App;
