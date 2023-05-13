import React from 'react'
import "./Sidebar.css"
import Textfield from '@atlaskit/textfield';
import { css, jsx } from '@emotion/react';

import { token } from '@atlaskit/tokens';

function Sidebar({handleShowChange, searchUser, handleSearchChange}) {

  const bigFontStyles = css({

    // eslint-disable-next-line @repo/internal/styles/no-nested-styles
    '& > [data-ds--text-field--input]': {
      // input style
      fontSize: 60,
    },
  });

  return (
    <div className='sidebar'  >

        <h4 onClick={ () => handleShowChange(true) } >All Employees</h4>
        <h4 onClick={ () => handleShowChange(false) } >Shorlisted Employees</h4>
    
            <Textfield
              value={searchUser}
              onChange={(e) => handleSearchChange(e.target.value)}
              name="basic"
              aria-label="default text field"
              placeholder='search'
              css={bigFontStyles}
            />
    </div>
  )
}

export default Sidebar