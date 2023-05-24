import { Suspense, lazy } from 'react'
import { createBrowserRouter } from "react-router-dom";
import { ProtectedUser, ProtectedUserSettings } from "./user.middleware";

const BasicLayout = lazy(() => import('../views/layouts/BasicLayout'));

const HomePage = lazy(() => import('../views/pages/homaPage/HomePage'));
const UploadPage = lazy(() => import('../views/pages/uploadPage/UploadPage'));
const GifsPage = lazy(() => import('../views/pages/gifsPage/GifsPage'));
const MemesPage = lazy(() => import('../views/pages/memePage/MemePage'));
const MyContentPage = lazy(() => import('../views/pages/mycontentPage/MyContentPage'));
const FavPage = lazy(() => import('../views/pages/favPage/FavPage'));
const ItemPage = lazy(() => import('../views/pages/itemPage/ItemPage'));

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
        element: <Suspense fallback={<></>}><ProtectedUser><UploadPage /></ProtectedUser></Suspense>,
      },
      {
        path: "gifs",
        element: <Suspense fallback={<></>}><GifsPage /></Suspense>,
      },
      {
        path: "gifs/:id",
        element: <Suspense fallback={<></>}><ItemPage /></Suspense>,
      },
      {
        path: "memes",
        element: <Suspense fallback={<></>}><MemesPage /></Suspense>,
      },
      {
        path: "memes/:id",
        element: <Suspense fallback={<></>}>< ItemPage /></Suspense>,
      },
      {
        path: "mycontent",
        element: <Suspense fallback={<></>}><ProtectedUser><MyContentPage /></ProtectedUser></Suspense>,
        // 
      },
      {
        path: "favorite",
        element: <Suspense fallback={<></>}><FavPage /></Suspense>,
      },
    ]

  }
])

export default router;