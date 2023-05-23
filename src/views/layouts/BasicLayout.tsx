import { Suspense, lazy} from 'react'
import { Outlet } from 'react-router-dom'
import './basicLayout.scss'

const NavBar = lazy(() => import('../components/NavBar/NavBar'))

const BasicLayout = () => {
  return (
    <Suspense fallback={<></>}>
      <>
      <NavBar />
      </>
      <main className='basic-layout__main'>
        <div className='basic-layout__main--content'>
          <Outlet />
        </div>
      </main>
    </Suspense>
  )
}

export default BasicLayout