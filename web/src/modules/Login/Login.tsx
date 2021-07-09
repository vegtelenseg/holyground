import React from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { TextField, makeStyles, Container, Button } from '@material-ui/core'

import { AuthContext, UserAuthInfoType } from '../../contexts/auth/AuthController'

interface LoginProps {
  email: string
  password: string
}

const useStyles = makeStyles((theme) => ({
  form: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  container: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  textField: {
    marginBottom: theme.spacing(2)
  }
}))

export const Login = () => {
  const { control, handleSubmit } = useForm<LoginProps>()
  const classes = useStyles()
  const { handleLogin } = React.useContext(AuthContext)
  const onSubmit: SubmitHandler<UserAuthInfoType> = async (data) => {
    await handleLogin(data)
  }

  return (
    <Container maxWidth="sm" className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField variant="outlined" label="Email" {...field} className={classes.textField} />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField type="password" variant="outlined" label="Password" {...field} />
          )}
        />
        <Button type="submit" variant="contained" color="secondary" size="large">
          Login
        </Button>
      </form>
    </Container>
  )
}
