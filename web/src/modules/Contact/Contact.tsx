import React from 'react';
import { ContentContainer } from '../../components/ContentContainer/ContentContainer';
import { PageContentContainer } from '../../components/PageContentContainer/PageContentContainer';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import TextField from '@material-ui/core/TextField/TextField';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button'
import Box from '@material-ui/core/Box/Box';

const useStyles = makeStyles(theme => ({
  hgContactDetails: {
    display: 'flex' ,
    flexDirection: 'column' as 'column', 
    justifyContent: 'center'
  }
}))
export const Contact = () => {
  const classes = useStyles();
  return (
    <ContentContainer>
      {/* <TagLine tagLineInfo={{
        title: 'We would love to hear from you',
        subTitle: 'Drop us a mail'
      }} /> */}
      <PageContentContainer heading="Contact us">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} className={classes.hgContactDetails}>
            <Typography variant="body1">
              We are in Northriding, Johannesburg
            </Typography>
            <Typography variant="body1">
              You can call us on: +27 (0) 68 587 6332
            </Typography>
            <Typography variant="body1">
              Email is welcome too: buntuzen@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}><TextField label="name" placeholder="What should we call you?" variant="outlined" /></Grid>
              <Grid item xs={12} md={6}><TextField label="surname" placeholder="What's your surname?" variant="outlined" /></Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextField label="email" placeholder="and your email address?" variant="outlined" />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextField label="Your message" placeholder="your message, if any" variant="outlined" />
              </Grid>
            </Grid>
            <Box mt={2} display="flex">
            <Button color="secondary" variant="contained">Send</Button>
            </Box>
          </Grid>
        </Grid>
      </PageContentContainer>
    </ContentContainer>

  )
}

export default Contact
