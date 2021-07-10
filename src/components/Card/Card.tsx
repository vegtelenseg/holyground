import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import MuiCard from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Button, useMediaQuery } from '@material-ui/core'
import { theme } from '../../Theme'
import { useSetRecoilState } from 'recoil'
import { readMoreAtom } from '../Dialogs/Atoms'

const useStyles = (pictureUrl: string, isDesktop: boolean) =>
  makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        border: '1px solid #EBD0B7',
        margin: '0.4rem 0 4.4rem'
      },
      details: {
        width: '100%',
        backgroundImage: !isDesktop ? 'intial' : `url(${pictureUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      contentRoot: {
        // flex: "1 0 auto",
        padding: '60px 60px',
        '&:last-child': {
          paddingBottom: 60
        },
        [theme.breakpoints.down('sm')]: {
          background: 'rgba(0,0,0, 0.5)'
        }
      },
      cover: {
        width: '100%'
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1)
      },
      playIcon: {
        height: 38,
        width: 38
      },
      title: {
        color: 'rgb(83, 71, 69)',
        [theme.breakpoints.down('sm')]: {
          color: theme.palette.common.white
        }
      },
      subTitle: {
        color: '#000',
        [theme.breakpoints.down('sm')]: {
          color: theme.palette.common.white
        }
      },
      hr: {
        border: '1px solid #EBD0B7',
        boxSizing: 'border-box',
        opacity: 0.6,
        marginTop: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
          width: 'calc(100% - 20rem)'
        }
      },
      actionButton: {
        marginTop: 20,
        color: theme.palette.common.white
      }
    })
  )

interface Image {
  url: string
}

export interface CardInfo {
  id: string
  title: string
  description: string
  breakdown: string
  readMore: string
  bookNow: string
  cover: Image
  onClick: () => void
}

export const Card = ({
  id,
  title,
  description,
  onClick,
  cover,
  readMore,
  bookNow,
  breakdown
}: CardInfo) => {
  const isDesktop = useMediaQuery(theme.breakpoints.down('sm'))
  const setReadMore = useSetRecoilState(readMoreAtom)
  const classes = useStyles(cover.url, isDesktop)()
  return (
    <MuiCard className={classes.root}>
      {!isDesktop && <CardMedia className={classes.cover} image={cover.url} title={title} />}
      <div className={classes.details}>
        <CardContent
          classes={{
            root: classes.contentRoot
          }}
        >
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body2" className={classes.subTitle}>
            {description}
          </Typography>
          <hr className={classes.hr} />
          <Button
            variant="contained"
            color="secondary"
            className={classes.actionButton}
            onClick={() => {
              setReadMore({
                isOpen: true,
                title,
                description,
                breakdown,
                id
              })
            }}
          >
            {readMore}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.actionButton}
            onClick={onClick}
          >
            {bookNow}
          </Button>
        </CardContent>
      </div>
    </MuiCard>
  )
}
