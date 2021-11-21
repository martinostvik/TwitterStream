import React from 'react'
import { Message } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = props => {
  return (
    <div className='header-container'>
      <Message>
        <p>
          You are tracking tweets containing <strong>"{props.term}"</strong> word in them.
        </p>
      </Message>
    </div>
  )
}

Header.propTypes = {
  term: PropTypes.string.isRequired,
}

export default Header
