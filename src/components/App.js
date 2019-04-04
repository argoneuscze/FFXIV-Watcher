import React, {Component} from 'react';
import './App.css';
import Layout from "../containers/layout";
import {HashRouter, Route} from "react-router-dom";
import ItemWatcherContainer from "../containers/ItemWatcherContainer";
import ItemSearchContainer from "../containers/ItemSearchContainer";

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
