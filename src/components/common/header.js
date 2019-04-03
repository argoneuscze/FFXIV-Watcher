import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Index</Link></li>
                <li><Link to="/search">Item Search</Link></li>
            </ul>
        );
    }
}
