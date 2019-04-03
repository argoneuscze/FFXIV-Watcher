import React, {Component} from 'react';
import './App.css';
import Layout from "../containers/layout";
import {HashRouter, Route} from "react-router-dom";
import ItemSearchContainer from "../containers/item_search_container";
import ItemWatcherContainer from "../containers/item_watcher_container";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Layout>
                    <Route path="/" exact component={ItemWatcherContainer}/>
                    <Route path="/search" exact component={ItemSearchContainer}/>
                </Layout>
            </HashRouter>
        );
    }
}

export default App;
