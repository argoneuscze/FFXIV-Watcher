import React from 'react';
import SearchBox from "../components/item_search/SearchBox";
import SearchResultsTable from "../components/item_search/SearchResultsTable";
import {itemSearchFetch} from "../actions/itemSearchActions";
import {connect} from "react-redux";
import {watchlistAdd, watchlistRemove} from "../actions/watchlistActions";

class ItemSearchContainer extends React.Component {
    render() {
        return (
            <div>
                {this.props.isFetching && <p>Loading...</p>}
                <SearchBox onSearch={this.props.itemSearchFetch}/>
                {this.props.error.length > 0 && <p>Error occurred</p>}
                <SearchResultsTable data={this.props.data} watched={this.props.watched}
                                    watchAdd={this.props.watchlistAdd} watchRemove={this.props.watchlistRemove}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {search, watchlist} = state;
    const watched_items = new Set();
    Object.keys(watchlist.items).forEach((value => watched_items.add(parseInt(value))));
    return {
        isFetching: search.isFetching,
        error: search.error_message,
        data: search.data,
        watched: watched_items
    }
}

const mapDispatchToProps = {
    itemSearchFetch,
    watchlistAdd,
    watchlistRemove
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemSearchContainer);
