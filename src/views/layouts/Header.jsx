import React from 'react'

import useAuthStore from '@/store/store.auth'
import {signOut} from 'firebase/auth'
import {auth} from '@/firebase/firedb'
import {useNavigate} from 'react-router-dom'

// components
import {Link} from 'react-router-dom'
import {Button} from '@mantine/core'

const Header = () => {
  const {authUser} = useAuthStore();
  const navigate = useNavigate();

  function handLogout() {
    signOut(auth)
      .then(() => {
        navigate('/');
        console.log('user has logged out!!');
      })
      .catch((error) => {
        console.log('error during logout: ', error.message)
      })
  }

  // show logout button logic
  let logoutBtn = null;
  if (authUser === null) logoutBtn = <>loading!!</>;
  else if (authUser) logoutBtn = (
    <Button
    variant={'outline'}
    color='red'
    onClick={handLogout}
    >
      logout
    </Button>
  )
  else logoutBtn = <></>;

  return (
    <header
    className='
    flex items-center justify-between
    p-3 bg-blue-50
    '
    >
      <Button
      variant='outline'
      color='green'
      >
        <Link to='/'>Expenses</Link>
      </Button>

      <nav>
        {logoutBtn}
      </nav>  
    </header>
  )
}

export default Header