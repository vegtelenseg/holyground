import { ApolloClient, InMemoryCache } from '@apollo/client'

const uri = process.env.REACT_APP_API_HOST || 'http://localhost:1337'
const cache = new InMemoryCache()

export const client = new ApolloClient({
  cache,
  uri: `${uri}/graphql`
})

// const link = new HttpLink({
//   uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
// });
// const client = new ApolloClient({
//   uri: `${uri}/grapqhl`,

//   request: (operation) => {
//     const token = fetchJwt();
//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : "",
//       },
//     });
//   },
//   onError: ({ response, operation }) => {
//     if (response?.errors) {
//       if (response?.errors && response.errors[0].message === "Invalid token.") {
//         window.localStorage.removeItem("access-token");
//         window.sessionStorage.removeItem("access-token");
//         window.location.replace(process.env.REACT_APP_CLIENT_HOST || "");
//       }
//       response.errors = response?.errors.map((err) => {
//         const code = err?.extensions?.exception.output.statusCode;
//         return {
//           ...err,
//           message: `${code} ${err.message} (${operation.operationName})`,
//         };
//       });
//     }
//   },
//   cache: new InMemoryCache(),
// });
