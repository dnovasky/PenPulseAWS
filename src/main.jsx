import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from 'react-oidc-context'

import './style.scss'

const redirectUri = import.meta.env.prod
  ? `https://${import.meta.env.VITE_PENPULSE_URL}`
  : 'http://localhost:5173/'
console.log(redirectUri)

// Your Cognito User Pool information
const cognitoAuthConfig = {
  authority: `https://cognito-idp.us-west-1.amazonaws.com/${
    import.meta.env.VITE_USER_POOL_ID
  }`,
  client_id: `${import.meta.env.VITE_CLIENT_ID}`,
  redirect_uri: redirectUri,
  redirectMethod: 'replace',
  response_type: 'code',
  scope: 'email openid profile',
}

createRoot(document.getElementById('root')).render(
  <AuthProvider {...cognitoAuthConfig}>
    <App />
  </AuthProvider>
)
