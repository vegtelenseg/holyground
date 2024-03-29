import { Box, useMediaQuery } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography/Typography'
import { withRouter } from 'react-router-dom'
import clsx from 'clsx'
import { theme } from '../../Theme'
import { MobileMenu } from './components/MobileMenu'

export const menuItems = [
  { name: 'Home', urls: ['/', '/home'] },
  { name: 'About', urls: ['/about'] },
  { name: 'Self-Care Check-in', urls: ['/check-in'] },
  { name: 'Contact', urls: ['/contact'] },
  { name: 'Blog', urls: ['/blog'] }
]

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    backgroundImage: 'linear-gradient(0deg, transparent, #c4c4c4)',
    position: 'fixed' as 'fixed',
    width: '100%',
    top: 0
  },
  menuSpacing: {
    // paddingTop: theme.spacing(50)
    height: theme.spacing(15)
  },
  activeRoute: {
    '&::after': {
      content: '""',
      width: '25%',
      height: 1,
      background: '#000',
      position: 'relative',
      display: 'block',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  },
  menuItem: {
    cursor: 'pointer',
    padding: '0',
    marginRight: 45,
    textAlign: 'center' as 'center'
  }
}))
export const Menu = withRouter(({ history }) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
  const isActiveRoute = (routes: string[]) => {
    return routes.some((route) => route === window.location.pathname)
  }
  return isDesktop ? (
    <Box
      display="flex"
      justifyContent="center"
      pt={2}
      zIndex="1"
      position="relative"
      className={classes.menuSpacing}
    >
      <Box
        display="flex"
        justifyContent="center"
        pt={2}
        zIndex="1"
        position="relative"
        className={classes.menuContainer}
      >
        {menuItems.map((menuItem) => (
          <ul
            key={menuItem.name}
            className={clsx(
              classes.menuItem,
              isActiveRoute(menuItem.urls) ? classes.activeRoute : ''
            )}
            onClick={() => history.push(menuItem.urls[0])}
          >
            <Typography variant="h6">{menuItem.name}</Typography>
          </ul>
        ))}
      </Box>
    </Box>
  ) : (
    <MobileMenu />
  )
})

export default Menu
