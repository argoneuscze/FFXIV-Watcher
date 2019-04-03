import React, {Component} from 'react';
import './App.css';
import Layout from "../containers/layout";
import {HashRouter, Route} from "react-router-dom";
import ItemWatcherContainer from "../containers/ItemWatcherContainer";
import ItemSearchContainer from "../containers/ItemSearchContainer";

class App extends Component {
    render() {
        // TODO make / watcher and /search search, this is just debug
        return (
            <HashRouter>
                <Layout>
                    <Route path="/" exact component={ItemSearchContainer}/>
                    <Route path="/search" exact component={ItemWatcherContainer}/>
                </Layout>
            </HashRouter>
        );
    }
}

export default App;
