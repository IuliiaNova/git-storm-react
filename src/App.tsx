import { Auth0Provider } from '@auth0/auth0-react';
import { isLocalhost } from './views/utils/isLocalhost';

function App() {

  return (
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
      clientId={
        isLocalhost
          ? process.env.REACT_APP_DEVELOPMENT_AUTH0_CLIENT_ID as string
          : process.env.REACT_APP_PRODUCTION_AUTH0_CLIENT_ID as string
      }
      authorizationParams={{
        redirect_uri: window.location.origin + '/',
        audience: isLocalhost
          ? process.env.REACT_APP_AUTH0_AUDIENCE_DEVELOPMENT
          : process.env.REACT_APP_AUTH0_AUDIENCE_PRODUCTION
      }}>

    </Auth0Provider>
  )
}

export default App
