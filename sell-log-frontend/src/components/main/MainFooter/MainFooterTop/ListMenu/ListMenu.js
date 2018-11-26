import React, { Component } from 'react';
 class ListMenu extends Component {
    render() {
        return (
            <li>
                <a href="#">{this.props.item}</a>
            </li>
        )
    }
}
 export default ListMenu;