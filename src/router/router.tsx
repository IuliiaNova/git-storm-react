import { Suspense, lazy} from 'react'
import { createBrowserRouter } from "react-router-dom";

const BasicLayout = lazy(() => import('../views/layouts/BasicLayout'));

const HomePage = lazy(() => import('../views/pages/homaPage/HomePage')) ;
const UploadPage = lazy(() => import('../views/pages/uploadPage/UploadPage')) ;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<></>}><BasicLayout /></Suspense>,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<></>}><HomePage /></Suspense>,
      },
      {
         path: "upload",
         element: <Suspense fallback={<></>}><UploadPage /></Suspense>,
       },
      // {
      //   path: "memes",
      //   element: <Suspense fallback={<></>}><MemesPage /></Suspense>,
      //   children: [
      //     {
      //       path: ":memeId",
      //       element: <Suspense fallback={<></>}><MemePage /></Suspense>,
      //     }
      //   ]
      // },
      // {
      //   path: "gifs",
      //   element: <Suspense fallback={<></>}><GifsPage /></Suspense>,
      //   children: [
      //     {
      //       path: ":gifId",
      //       element: <Suspense fallback={<></>}><GifPage /></Suspense>,
      //     }
      //   ]
      // },
      // {
      //   path: "*",
      //   element: <Suspense fallback={<></>}><ErrorPage /></Suspense>,
      // },
    ]

  }
])

export default router;