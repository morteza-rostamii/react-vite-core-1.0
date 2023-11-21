import React from 'react'
import {Link} from 'react-router-dom'

import {Button} from '@mantine/core'

const Header = () => {
  return (
    <header
    className='
    p-3 bg-blue-50
    '
    >
      <Button
      variant='outline'
      color='green'
      >
        <Link to='/'>Expenses</Link>
      </Button>
    </header>
  )
}

export default Header