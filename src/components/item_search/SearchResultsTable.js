import React from 'react';

export default class SearchResultsTable extends React.Component {
    isWatched(id) {
        return this.props.watched.has(id);
    }

    render() {
        const items = this.props.data.map(val => {
            return (
                <tr key={val.ID}>
                    <td>{val.ID}</td>
                    <td>{val.name}</td>
                    <th>
                        {!this.isWatched(val.ID) ? (
                            <button onClick={() => this.props.watchAdd(val)}>Watch</button>
                        ) : (
                            <button onClick={() => this.props.watchRemove(val.ID)}>Unwatch</button>
                        )}
                    </th>
                </tr>
            )
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Watchlist</th>
                </tr>
                </thead>
                <tbody>
                {items}
                </tbody>
            </table>
        );
    }
}
