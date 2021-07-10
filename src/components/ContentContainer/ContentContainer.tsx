import React from 'react'
import Box from '@material-ui/core/Box/Box'

interface ContentContainerProps {
  children: React.ReactNode
}

export const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <Box color="#fff" position="relative" textAlign="center" height="100%">
      {children}
    </Box>
  )
}
