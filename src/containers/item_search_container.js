import React from 'react';
import SearchBox from "../components/item_search/search_box";
import SearchResultsTable from "../components/item_search/search_results_table";

export default class ItemSearchContainer extends React.Component {
    render() {
        return (
            <div>
                <SearchBox/>
                <SearchResultsTable/>
            </div>
        );
    }
}
