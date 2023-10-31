import './App.css';
import './services/firebase'

import {CAR_DATA, NUMBER_DATA, PERSON_DATA, PRODUCTS_DATA, WIKI_TEST1_DATA} from "./data/data";
import {PicturesPage} from "./pages/PicturesPage";
import normalize from "normalize.css"
import {MenuCardPage} from "./pages/MenuCardPage";
import {NumbersPage} from "./pages/NumbersPage";
import {CarsPage} from "./pages/CarsPage";
import {PersonsPage} from "./pages/PersonsPage";
import {EventAndStatePage} from "./pages/EventAndStatePage";
import {SearchPersonsPage} from "./pages/SearchPersonsPage";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {WikiPage} from "./pages/WikiPage";
import {InputPage} from "./pages/InputPage";
import {FavoriteNumberPage} from "./pages/FavoriteNumberPage";
import {PersonsFromDbPage} from "./pages/PersonsFromDbPage";
import {CarsFromDbPage} from "./pages/CarsFromDbPage";
import {MenuProductsFromDbPage} from "./pages/MenuProductsFromDbPage";
import {useLocalStorage} from "@uidotdev/usehooks";
import {MessageProvider} from "./contexts/messageContext";
import {PersonsFromDbProvider} from "./contexts/PersonsFromDbContext";

function ProvidedApp() {
    const [defaultTab, setDefaultTab] = useLocalStorage("defaultTabIndex", 0)

    return (
        <Tabs defaultIndex={defaultTab} onSelect={(index) => setDefaultTab(index)}>
            <TabList>
                <Tab>Menu Card Page</Tab>
                <Tab>Pictures Page</Tab>
                <Tab>Numbers Page</Tab>
                <Tab>Cars Page</Tab>
                <Tab>Persons Page</Tab>
                <Tab>Wiki Page</Tab>
                <Tab>Events and State Page</Tab>
                <Tab>Favorite Number Page</Tab>
                <Tab>Input Page</Tab>
                <Tab>search</Tab>
                <Tab>Persons from DB</Tab>
                <Tab>Cars from DB</Tab>
                <Tab>Products from DB</Tab>
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
            <TabPanel>
                <PersonsPage persons={PERSON_DATA}/>
            </TabPanel>
            <TabPanel>
                <WikiPage wikitexts={WIKI_TEST1_DATA}/>
            </TabPanel>
            <TabPanel>
                <EventAndStatePage/>
            </TabPanel>
            <TabPanel>
                <FavoriteNumberPage numbers={NUMBER_DATA}/>
            </TabPanel>
            <TabPanel>
                <InputPage/>
            </TabPanel>
            <TabPanel>
                <SearchPersonsPage persons={PERSON_DATA}/>
            </TabPanel>
            <TabPanel>
                <PersonsFromDbProvider>
                    <PersonsFromDbPage/>
                </PersonsFromDbProvider>
            </TabPanel>
            <TabPanel>
                <CarsFromDbPage/>
            </TabPanel>
            <TabPanel>
                <MenuProductsFromDbPage/>
            </TabPanel>
        </Tabs>
    );
}

function App() {
    return (
            <MessageProvider>
                <ProvidedApp/>
            </MessageProvider>


    );
}

export default App;
