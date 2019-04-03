import React from 'react';
import SearchBox from "../components/item_search/SearchBox";
import SearchResultsTable from "../components/item_search/SearchResultsTable";
import {itemSearchRequest} from "../actions/itemSearchActions";
import {connect} from "react-redux";

class ItemSearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleItemSearch = this.handleItemSearch.bind(this);
    }

    handleItemSearch(server, itemName) {
        // debug
        server = 'Brynhildr';
        itemName = 'rakshasa';

        this.props.dispatch(itemSearchRequest(server, itemName))
    }

    render() {
        return (
            <div>
                <SearchBox onSearch={this.handleItemSearch}/>
                <SearchResultsTable/>
            </div>
        );
    }
}

export default connect()(ItemSearchContainer);
