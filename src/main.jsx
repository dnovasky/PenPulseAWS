import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from 'react-oidc-context'

import './style.scss'

// Your Cognito User Pool information
const cognitoAuthConfig = {
  authority: 'https://cognito-idp.us-west-1.amazonaws.com/us-west-1_qVBDlplgo',
  client_id: '7mo49khp7gvn82led1iremv4jj',
  redirect_uri: 'http://localhost:5173/',
  redirectMethod: 'replace',
  response_type: 'code',
  disablePKCE: true,
  revokeTokensOnSigout: true,
  scope: 'email openid profile',
}

createRoot(document.getElementById('root')).render(
  <AuthProvider {...cognitoAuthConfig}>
    <App />
  </AuthProvider>
)
