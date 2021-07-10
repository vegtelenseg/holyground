import React from 'react'
import * as Yup from 'yup'

import { ContentContainer } from '../../components/ContentContainer/ContentContainer'
import { PageContentContainer } from '../../components/PageContentContainer/PageContentContainer'
import Grid from '@material-ui/core/Grid/Grid'
import Typography from '@material-ui/core/Typography/Typography'
import { makeStyles, MenuItem } from '@material-ui/core'
import Button from '@material-ui/core/Button/Button'
import Box from '@material-ui/core/Box/Box'
import { useForm } from 'react-hook-form'
import { useCreateBookingMutation, useGetServicesQuery } from '../../generated/graphql'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '../../components/TextField/TextField'
import { useParams } from 'react-router'
import { Select } from '../../components/Select/Select'

interface BookingProps {
  name: string
  surname: string
  email: string
  service: string
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

const useBookingForm = () => {
  const { id } = useParams<{ id: string }>()
  const [createBooking] = useCreateBookingMutation({
    onError: (error: any) => console.log({ error })
  })

  const validationSchema = React.useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string().required('Name cannot be blank'),
        surname: Yup.string().required('Surname cannot be blank'),
        email: Yup.string().email('Not a valid email address').required('Email cannot be blank'),
        service: Yup.string().required('Service cannot be blank')
      }),
    []
  )

  const onSubmit = React.useCallback(
    (data: BookingProps) => {
      createBooking({
        variables: {
          createBookingInput: {
            data: {
              name: data.name,
              surname: data.surname,
              email: data.email,
              service: id
            }
          }
        }
      })
    },
    [createBooking, id]
  )

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<BookingProps>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      service: ''
    }
  })
  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit)
  }
}

export const Booking = () => {
  const classes = useStyles()
  const { onSubmit, register, errors } = useBookingForm()

  const { data } = useGetServicesQuery({
    fetchPolicy: 'cache-and-network',
    onError: (error: any) => console.log({ error })
  })
  return (
    <ContentContainer>
      <PageContentContainer heading="Book a slot">
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
                    label="name"
                    placeholder="What should we call you?"
                    variant="outlined"
                    message={errors?.name?.message}
                    {...register('name')}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="surname"
                    placeholder="What's your surname?"
                    variant="outlined"
                    message={errors?.surname?.message}
                    {...register('surname')}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="email"
                    placeholder="and your email address?"
                    variant="outlined"
                    message={errors?.email?.message}
                    {...register('email')}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <Select
                    label="Select service"
                    variant="outlined"
                    fullWidth
                    {...register('service')}
                    message={errors?.email?.message}
                  >
                    {data &&
                      data.services &&
                      data.services.length &&
                      data.services.map((serivce) => (
                        <MenuItem value={serivce?.id}>{serivce?.title}</MenuItem>
                      ))}
                  </Select>
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

export default Booking
