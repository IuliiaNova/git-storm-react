import { RouterProvider } from "react-router-dom";
import router from './router/router';
import UserProvider from "./context/UserProvider";
import { Auth0Provider } from '@auth0/auth0-react';
import ContentProvider from "./context/contentContext/ContextProvider";

function App() {

  return (
    <Auth0Provider
      domain='dev-7wmznkm41wx0ichb.us.auth0.com'
      clientId='h3mSWe3qWxnq6P1rH8v76aQ8J5JG19lv'
      authorizationParams={{
        redirect_uri: window.location.origin + '/',
        // audience: 'http://localhost:4000'
      }}>
      <UserProvider>
        <ContentProvider>
          <RouterProvider router={router}
            fallbackElement={<></>} />
        </ContentProvider>
      </UserProvider>
    </Auth0Provider>
  )
}

export default App
