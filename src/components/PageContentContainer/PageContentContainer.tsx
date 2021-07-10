import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Waves } from '../../assets/svg/waves'

const useStyles = makeStyles((theme) => ({
  pageHeadingContainer: {
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: '7.5rem',
    marginBottom: '3.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'calc(100% - 3rem)',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  heading: {
    fontFamily: 'hg-regular'
  },
  waves: {
    width: '3rem',
    height: '3rem'
  },
  contentBox: {
    position: 'relative',
    // top: '50%',
    // transform: 'translateY(-50%)',
    width: 'calc(100% - 30rem)',
    margin: 'auto',
    padding: theme.spacing(3),
    background: 'rgba(116, 116, 117, .6)',

    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 15rem)'
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 3rem)'
    }
  }
}))

type Heading = string

export const PageContentContainer = ({
  heading,
  children
}: {
  heading: Heading
  children: React.ReactNode
}) => {
  const classes = useStyles()
  return (
    <div className={classes.contentBox}>
      <div className={classes.pageHeadingContainer}>
        <div>
          {/* <TagLine
            tagLineInfo={{
              title: '"These mountains you are carrying, you were only supposed to climb"',
              subTitle: 'Najwa Zebian'
            }}
          /> */}
          <Typography className={classes.heading} variant="h5">
            {heading}
          </Typography>
        </div>
        <div>
          <Waves className={classes.waves} />
        </div>
      </div>
      {children}
    </div>
  )
}
