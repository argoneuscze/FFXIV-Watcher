import React, {Component} from 'react';
import './App.css';
import Layout from "../containers/layout";
import {HashRouter, Route} from "react-router-dom";
import SearchResults from "./item_search/search_results";
import ItemWatcher from "./item_watcher/item_watcher";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Layout>
                    <Route path="/" exact component={ItemWatcher}/>
                    <Route path="/search" exact component={SearchResults}/>
                </Layout>
            </HashRouter>
        );
    }
}

export default App;
