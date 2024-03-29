import React from 'react'
import * as Yup from 'yup'

import { ContentContainer } from '../../components/ContentContainer/ContentContainer'
import { PageContentContainer } from '../../components/PageContentContainer/PageContentContainer'
import Grid from '@material-ui/core/Grid/Grid'
import Typography from '@material-ui/core/Typography/Typography'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button/Button'
import Box from '@material-ui/core/Box/Box'
import { useForm } from 'react-hook-form'
import { useCreateLeadMutation } from '../../generated/graphql'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '../../components/TextField/TextField'
interface ContactProps {
  name: string
  surname: string
  email: string
  message: string
}

const useStyles = makeStyles((theme) => ({
  hgContactDetails: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center'
  },
  submitBtn: {
    margin: 0
  }
}))

const useContactForm = () => {
  const [createLead] = useCreateLeadMutation({
    onError: (error: any) => console.log({ error })
  })

  const validationSchema = React.useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string().required('Name cannot be blank'),
        surname: Yup.string().required('Surname cannot be blank'),
        email: Yup.string().email('Not a valid email address').required('Email cannot be blank')
      }),
    []
  )

  const onSubmit = React.useCallback(
    (data: ContactProps) => {
      createLead({
        variables: {
          createLeadInput: {
            data: {
              firstname: data.name,
              lastname: data.surname,
              email: data.email,
              message: data.message
            }
          }
        }
      })
    },
    [createLead]
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ContactProps>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      message: ''
    }
  })
  console.log('Is valid: ', isValid)
  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit)
  }
}

export const Contact = () => {
  const classes = useStyles()
  const { onSubmit, register, errors } = useContactForm()
  console.log({ errors })
  return (
    <ContentContainer>
      <PageContentContainer heading="Contact us">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} className={classes.hgContactDetails}>
            <Typography variant="body1">We are in Lonehill, Johannesburg</Typography>
            <Typography variant="body1">You can call us on: +27 (0) 68 587 6332</Typography>
            <Typography variant="body1">Email is welcome too: buntuzen@gmail.com</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register('name')}
                    label="name"
                    placeholder="What should we call you?"
                    variant="outlined"
                    message={errors?.name?.message}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register('surname')}
                    label="surname"
                    placeholder="What's your surname?"
                    variant="outlined"
                    message={errors?.surname?.message}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="email"
                    {...register('email')}
                    placeholder="and your email address?"
                    variant="outlined"
                    message={errors?.email?.message}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Your message"
                    {...register('message')}
                    placeholder="your message, if any"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Box mt={2} display="flex">
                <Button
                  color="secondary"
                  variant="contained"
                  type="submit"
                  fullWidth
                  className={classes.submitBtn}
                >
                  Send
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </PageContentContainer>
    </ContentContainer>
  )
}

export default Contact
