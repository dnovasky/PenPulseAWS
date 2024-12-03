import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from 'react-oidc-context'

import './style.scss'

// Your Cognito User Pool information
const cognitoAuthConfig = {
  authority: 'https://cognito-idp.us-west-1.amazonaws.com/us-west-1_JX5gbuFXg',
  client_id: '10irqk4ha30ljq58iv51kvvu55',
  redirect_uri: 'http://localhost:5173/',
  response_type: 'code',
  scope: 'email openid profile',
}

createRoot(document.getElementById('root')).render(
  <AuthProvider {...cognitoAuthConfig}>
    <App />
  </AuthProvider>
)
