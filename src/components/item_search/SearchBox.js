import React from 'react';

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState({searchText: event.target.value});
    }

    handleSearch() {
        this.props.onSearch(this.state.searchText);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleSearch}>Load</button>
            </div>
        );
    }
}