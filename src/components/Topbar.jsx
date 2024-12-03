'use client'
import { useAuth } from 'react-oidc-context'
import { useState, useEffect } from 'react'

const Topbar = () => {
  const auth = useAuth()
  var [date, setDate] = useState(Date.now())

  useEffect(() => {
    var timer = setInterval(() => setDate(Date.now(), 1000))
    return () => clearInterval(timer)
  })

  const signOutRedirect = () => {
    const clientId = '10irqk4ha30ljq58iv51kvvu55'
    const logoutUri = 'http://localhost:5173/logout'
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
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    )
  }

  return (
    <div className="container-fluid justify-content-between row align-items-center py-2 px-5">
      <a href="" className="navbar-brand d-none d-lg-block">
        <h1 className="m-0 display-5 text-uppercase">
          <span className="text-primary">Pen</span>Pulse
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
        <a id="login" onClick={auth.signinRedirect}>
          Log in
        </a>
        <span>/</span>
        <a id="signup" onClick={signOutRedirect}>
          Sign Up
        </a>
      </div>
    </div>
  )
}

export default Topbar
