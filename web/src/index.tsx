import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core'
import { ApolloProvider } from '@apollo/react-hooks'

import App from './App'
import * as serviceWorker from './serviceWorker'
import { theme } from './Theme'
import { client } from './apolloClient'
import { AuthController } from './contexts/auth/AuthController'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider
      // @ts-ignore
      client={client}
    >
      <AuthController>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthController>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
