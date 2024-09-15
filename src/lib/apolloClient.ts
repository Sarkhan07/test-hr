import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuthStore } from '@/app/store/auth';

const httpLink = new HttpLink({
  uri: 'https://api.escuelajs.co/graphql',
});

const authLink = setContext((_, { headers }) => {
  const accessToken = useAuthStore.getState().accessToken;
  return {
    headers: {
      ...headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
