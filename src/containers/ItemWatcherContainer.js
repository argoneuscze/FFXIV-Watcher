import React from 'react';
import ItemWatcherTable from "../components/item_watcher/ItemWatcherTable";
import {watchlistRemove} from "../actions/watchlistActions";
import {connect} from "react-redux";
import {watchlistFetchAll} from "../actions/watchlistFetchActions";

class ItemWatcherContainer extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.watchlistFetchAll}>Debug</button>
                <ItemWatcherTable data={this.props.data} watchRemove={this.props.watchlistRemove}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {watchlist_fetch} = state;
    return {
        isFetching: watchlist_fetch.isFetching,
        error: watchlist_fetch.error_message,
        data: watchlist_fetch.data
    }
}

const mapDispatchToProps = {
    watchlistFetchAll,
    watchlistRemove
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemWatcherContainer);
