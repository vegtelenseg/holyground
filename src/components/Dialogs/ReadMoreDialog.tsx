import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'

import { useRecoilState } from 'recoil'
import { readMoreAtom } from './Atoms'
import { useHistory } from 'react-router'
import { DialogActions, DialogContent, DialogTitle } from './components/DialogComponents'
import Typography from '@material-ui/core/Typography'

export const ReadMoreDialog = () => {
  const [readMore, setOpen] = useRecoilState(readMoreAtom)
  const history = useHistory()
  const handleClose = () => {
    setOpen((prevState) => ({
      ...prevState,
      isOpen: false
    }))
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="readmore-dialog-title" open={readMore.isOpen}>
      <DialogTitle id="readmore-dialog-title" onClose={handleClose}>
        {readMore.title}
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>{readMore.description}</Typography>
        <Typography gutterBottom>{readMore.breakdown}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          // TODO: Use theme colors and className
          style={{
            color: 'white'
          }}
          autoFocus
          onClick={() => history.push(`/booking/${readMore.id}`)}
        >
          Book now
        </Button>
      </DialogActions>
    </Dialog>
  )
}
