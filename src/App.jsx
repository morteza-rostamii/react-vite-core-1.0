import { useState } from 'react'
import Morteza from '@/views/components/Morteza'
import {Button} from '@mantine/core'
import {Routes, Route, Link} from 'react-router-dom'
import LayMain from './views/layouts/LayMain'
import PageHome from './views/pages/PageHome'
import PageRegister from './views/pages/PageRegister'
import PageLogin from './views/pages/PageLogin'

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Routes>
        <Route
        element={<LayMain/>}
        >
          
          <Route
          path={'/'}
          element={
            isAuth ? <PageHome/> : <PageRegister/>
          }
          >
          </Route>          

          <Route
          path={'/register'}
          element={<PageRegister/>}
          >
          </Route>

          <Route
          path={'/login'}
          element={<PageLogin/>}
          >
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
