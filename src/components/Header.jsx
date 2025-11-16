import React from 'react'
import PropTypes from 'prop-types'
import '../styles/App.css'

export default function Header({ src }) {
    return (
        <div className='Container'>
            <img className="Image" src={src} />
        </div>
    )
}

Header.PropTypes = {
    src: PropTypes.string
}