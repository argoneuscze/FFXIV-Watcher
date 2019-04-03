import React from 'react';
import Header from "../components/common/Header";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}
