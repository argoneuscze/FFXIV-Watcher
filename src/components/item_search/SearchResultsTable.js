import React from 'react';

export default class SearchResultsTable extends React.Component {
    render() {
        const items = this.props.data.map(val => {
            return (
                <tr key={val.ID}>
                    <td>{val.ID}</td>
                    <td>{val.name}</td>
                </tr>
            )
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {items}
                </tbody>
            </table>
        );
    }
}
