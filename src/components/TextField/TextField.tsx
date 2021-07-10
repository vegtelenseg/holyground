import React from 'react'
import {
  makeStyles,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps
} from '@material-ui/core'

type TextFieldProps = MuiTextFieldProps & {
  message?: string
}

const useStyles = makeStyles((theme) => ({
  textFieldContainer: {
    textAlign: 'left',
    color: theme.palette.error.main
  },
  textField: {},

  helperText: {
    margin: 0
  }
}))
export const TextField = (props: TextFieldProps) => {
  const { message, ...rest } = props
  const classes = useStyles()
  return (
    <div className={classes.textFieldContainer}>
      <MuiTextField
        className={classes.textField}
        error={Boolean(message)}
        helperText={message}
        FormHelperTextProps={{
          className: classes.helperText
        }}
        {...rest}
      />
    </div>
  )
}
