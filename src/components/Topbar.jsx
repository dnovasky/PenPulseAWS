'use client'
import { useAuth } from 'react-oidc-context'
import { useState, useEffect } from 'react'
import { decodeJWT } from 'aws-amplify/auth'

const Topbar = () => {
  const auth = useAuth()
  var [date, setDate] = useState(Date.now())

  useEffect(() => {
    var timer = setInterval(() => setDate(Date.now(), 1000))
    return () => clearInterval(timer)
  })

  const handleSignOut = () => {
    auth.removeUser()
    auth.revokeTokens()
    localStorage.clear()
    CacheStorage.clear()
    signOutRedirect()
  }

  const signOutRedirect = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID
    const logoutUri = `https://${import.meta.env.VITE_PENPULSE_URL}/logout`
    const cognitoDomain =
      'https://pen-pulse-auth-domain.auth.us-west-1.amazoncognito.com'
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`
  }

  if (auth.isLoading) {
    return <div>Loading...</div>
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>
  }

  if (auth.isAuthenticated) {
    var username = decodeJWT(auth.user?.id_token)
    return (
      <div className='container-fluid justify-content-between row align-items-center py-2 px-5'>
        <a href='' className='navbar-brand d-none d-lg-block'>
          <h1 className='m-0 display-5 text-uppercase'>
            <span className='text-primary'>Pen</span>Pulse
          </h1>
        </a>

        <div>
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }).format(date)}
        </div>
        <div className='pt-2'>
          <p className='mb-0'>
            Hello {username.payload['cognito:username']}
            <a
              href=''
              onClick={handleSignOut}
              style={{ fontSize: '12px', color: 'red' }}>
              {' '}
              (signout)
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='container-fluid justify-content-between row align-items-center py-2 px-5'>
      <a href='' className='navbar-brand d-none d-lg-block'>
        <h1 className='m-0 display-5 text-uppercase'>
          <span className='text-primary'>Pen</span>Pulse
        </h1>
      </a>

      <div>
        {new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(date)}
      </div>
      <div>
        <>
          <a id='login' onClick={auth.signinRedirect}>
            Log in
          </a>
          <span> / </span>
          <a id='signup' onClick={signOutRedirect}>
            Sign Up
          </a>
        </>
      </div>
    </div>
  )
}

export default Topbar
