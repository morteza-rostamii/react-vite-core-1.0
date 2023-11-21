import React from 'react'
import {auth} from '@/firebase/firedb'
import {signInWithEmailAndPassword} from 'firebase/auth'

// components
import {Button} from '@mantine/core'
import { Input } from '@mantine/core';
import {Link} from 'react-router-dom'

const PageLogin = () => {

  // firebase login
  async function login() {

    await signInWithEmailAndPassword()
      .then(() => {

      })
      .catch((error) => {

      });
  }

  function handSbmit(event) {
    event.preventDefault();

    // login
    login();
  }

  return (
    <div
    className='
    flex items-center justify-center
    flex-1
    bg-red-50
    '
    >
      <form 
      className='
      flex flex-col gap-8 p-4 rounded-md
      bg-green-100 text-center
      '

      onSubmit={(event) => handSubmit(event)}
      >
        <h1>
        <Link to='/register'>go to register</Link>
        </h1>
        <Input 

        placeholder="email" 
        />
        <Input 
        placeholder="password" 
        />

        <Button>
          register
        </Button>
      </form>
    </div>
  )
}

export default PageLogin