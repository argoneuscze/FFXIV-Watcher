import React from 'react';
import SearchBox from "../components/item_search/SearchBox";
import SearchResultsTable from "../components/item_search/SearchResultsTable";
import {itemSearchFetch} from "../actions/itemSearchActions";
import {connect} from "react-redux";

class ItemSearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleItemSearch = this.handleItemSearch.bind(this);
    }

    handleItemSearch(itemName) {
        // debug
        itemName = 'rakshasa';

        this.props.dispatch(itemSearchFetch(itemName))
    }

    render() {
        return (
            <div>
                {this.props.isFetching && <p>Loading...</p>}
                <SearchBox onSearch={this.handleItemSearch}/>
                {this.props.error.length > 0 && <p>Error occurred</p>}
                <SearchResultsTable data={this.props.data}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {search} = state;
    return {
        isFetching: search.isFetching,
        error: search.error_message,
        data: search.data
    }
}

export default connect(mapStateToProps)(ItemSearchContainer);
