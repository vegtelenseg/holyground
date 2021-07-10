import React from 'react'
import { Select as MuiSelect, SelectProps as MuiSelectProps, Typography } from '@material-ui/core'

type SelectProps = MuiSelectProps & {
  message?: string
  children: React.ReactNode
}

export const Select = ({ message, children, ...rest }: SelectProps) => {
  return (
    <div
      // TODO: Move styles to makeStyles
      style={{
        textAlign: 'left'
      }}
    >
      <MuiSelect error={Boolean(message)} {...rest}>
        {children}
      </MuiSelect>
      {message && (
        <Typography variant="caption" color="error">
          {message}
        </Typography>
      )}
    </div>
  )
}
