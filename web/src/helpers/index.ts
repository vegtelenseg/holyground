import { ApolloQueryResult, DocumentNode } from 'apollo-boost'
import { TypedQueryDocumentNode } from 'graphql'
import { useQuery as useApolloQuery } from 'react-apollo'

export const useUtilQuery = <T, K>(
  query: DocumentNode | TypedQueryDocumentNode<T, K>
): ((variables?: K | undefined) => Promise<ApolloQueryResult<T>>) => {
  const { refetch } = useApolloQuery<T, K>(query, { skip: true })
  const imperativelyCallQuery = (variables?: K) => {
    return refetch(variables)
  }
  return imperativelyCallQuery
}
