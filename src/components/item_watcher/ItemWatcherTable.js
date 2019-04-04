import React from 'react';

export default class ItemWatcherTable extends React.Component {
    render() {
        const items = this.props.data.map(val => {
            return (
                <tr key={val.item_id}>
                    <td>{val.item_id}</td>
                    <td>{val.prices[0].PriceTotal}</td>
                    <th>
                        <button onClick={() => this.props.watchRemove(val.item_id)}>Unwatch</button>
                    </th>
                </tr>
            )
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Price</th>
                    <th>Watched</th>
                </tr>
                </thead>
                <tbody>
                {items}
                </tbody>
            </table>
        );
    }
}
