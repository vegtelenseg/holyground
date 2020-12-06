import React from 'react';
import Box from '@material-ui/core/Box/Box';


interface ContentContainerProps {
  children: React.ReactNode
}

export const ContentContainer = ({children}: ContentContainerProps) => {
  return (
    <Box top="35%" color="#fff" position="relative" textAlign="center">
      {children}
    </Box>
  )
}