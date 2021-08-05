import React from 'react';
import PropTypes from 'prop-types'


export default function Header(props) {
     const {title} = props;
    return (
        <div>
            <nav className="nav-wrapper light-blue darken-3">
                <a href="#!" className="brand-logo center">{title}</a>
            </nav>
        </div>
    )
}



Header.propTypes = {
    title:PropTypes.string.isRequired,
}