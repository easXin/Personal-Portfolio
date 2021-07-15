import React from 'react'
import './HeaderOptions.css'
function HeaderOptions({ Icon, title }) {
    return (
        <div className="headerOptions">
            <Icon className="headerOptions__icon active" />
            <p>{title}</p>
        </div>
    )
}

export default HeaderOptions
