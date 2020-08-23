import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import { useTransition, animated } from 'react-spring'

const useStyles = (isScrolledTextColor: boolean) => makeStyles(theme => ({
  title: {
    transition: "all 0.9s ease-in",
    letterSpacing: theme.spacing(0.2),
    color: isScrolledTextColor ? "#655858" : theme.palette.common.white,
  },
  heading: {
    marginBottom: theme.spacing(44),
    width: "calc(100% - 5rem)",
    marginLeft: "auto",
    marginRight: "auto",
  },
  subTitle: {
    letterSpacing: theme.spacing(0.3),
    transition: "all 1.2s ease-in",
    color: isScrolledTextColor ? "#655858" : theme.palette.common.white,
  },
}));

interface TagLine {
  title: string;
  subTitle?: string;
}

export const TagLine = ({ tagLineInfo }: { tagLineInfo: TagLine }) => {
  const [isScrolledTextColor, setIsScrolledTextColor] = React.useState(false);
  const classes = useStyles(isScrolledTextColor)();
  const { title, subTitle } = tagLineInfo;
  const [items, set] = React.useState(title.split(' '))
  const transitions = useTransition(items, item => item, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
  })
  React.useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        const checkpoint = 300;

        const currentScroll = window.pageYOffset;
        if (currentScroll > checkpoint) {
          setIsScrolledTextColor(true);
        } else {
          setIsScrolledTextColor(false);
        }
      },
      false
    );
    return () => {
      window.removeEventListener("scroll", () => {
        console.log("Listener removed");
      });
    };
  });
  return (
    <div className={classes.heading}>
      <Typography variant="h5" className={classes.title}>
        {/* {transitions.map(({ item, props, key }) =>
          <animated.span key={item} style={props}>{item}</animated.span>
        )} */}
        {title}
      </Typography>
      <br />
      {subTitle && <Typography variant="h6" className={classes.subTitle}>
        {subTitle}
      </Typography>}
    </div>
  )
}