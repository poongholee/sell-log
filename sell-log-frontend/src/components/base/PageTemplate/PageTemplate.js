import React, { Component } from 'react';
import type { Node } from 'react';
import './PageTemplate.scss';

class PageTemplate extends Component {

    render() {
        return (
            <div className="PageTemplate">
                {header}
                <main>{children}</main>
            </div>
        )
    } 
}

PageTemplate.propTypes = {
    header: Node,
    children: Node
}

export default PageTemplate;