import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { menuItems } from '../Menu';
import { withRouter } from 'react-router';


const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawer: {
    background: 'transparent'
  },
  mobileMenuContainer: {
    position: 'relative' as 'relative',
    zIndex: 999,

  },
  menuIcon: {
    fill: '#a6a6a6',
    margin: theme.spacing(3),
    width: 40,
    height: 40
  },
  listItemText: {
    '&::after': {
      content: '""',
      width: '5%',
      height: 1,
      background: '#000',
      position: 'relative',
      display: 'block',
    }
  }
}));

type Anchor = 'right';

export const MobileMenu = withRouter(({ history }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClick = React.useCallback((url: string) => {
    history.push(url)
  }, [history])
  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map((menuItem, _index) => (
          <ListItem button key={menuItem.name} onClick={() => handleClick(menuItem.urls[0])}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={menuItem.name} className={classes.listItemText} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.mobileMenuContainer}>
      {(['right'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)} classes={{
            root: classes.menuIcon
          }} />
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} className={classes.drawer}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
})