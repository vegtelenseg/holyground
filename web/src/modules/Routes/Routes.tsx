import React from 'react'
import { Switch, Route } from 'react-router'

import { Login } from '../Login/Login'

const Menu = React.lazy(() => import('../Menu/Menu'))
const Home = React.lazy(() => import('../Home/Home'))
const About = React.lazy(() => import('../About/About'))
const SelfCareCheckIn = React.lazy(() => import('../SelfCareCheckIn/SelfCareCheckIn'))
const Contact = React.lazy(() => import('../Contact/Contact'))
const Footer = React.lazy(() => import('../Footer/Footer'))

export const SplashScreen = () => {
  return (
    <img
      alt="loading"
      src={require('../../assets/images/yoga.gif')}
      style={{
        width: '10%',
        left: '50%',
        position: 'relative',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.5
      }}
    />
  )
}
export const Routes = () => {
  return (
    <React.Suspense fallback={SplashScreen}>
      <Menu />
      <Switch>
        <Route path={['/', '/home']} exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/check-in" exact>
          <SelfCareCheckIn />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
      <Footer />
    </React.Suspense>
  )
}
