import { create } from 'zustand';
import { gql } from '@apollo/client';
import { client } from '@/lib/apolloClient';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      access_token
      refresh_token
    }
  }
`;


interface AuthState {
  [x: string]: any;
  accessToken: string | null;
  refreshToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  refreshAuthToken: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  refreshToken: null,


  login: async (email, password) => {
    try {
      const response = await client.mutate({
        mutation: LOGIN_MUTATION,
        variables: { email, password },
      });
      const { access_token, refresh_token } = response.data.login;
      set({ accessToken: access_token, refreshToken: refresh_token });

    } catch (error) {
      console.error('Login failed', error);
    }
  },

  refreshAuthToken: async () => {
    const { refreshToken, accessToken } = get();
    if (!refreshToken || !accessToken) return;

    try {
      const response = await client.mutate({
        mutation: REFRESH_TOKEN_MUTATION,
        variables: { refreshToken },
      });
      const { access_token, refresh_token } = response.data.refreshToken;
      set({ accessToken: access_token, refreshToken: refresh_token });
      localStorage.setItem('accessToken', access_token);
    } catch (error) {
      console.error('Token refresh failed', error);
      get().logout();
    }
  },

  logout: () => {
    set({ accessToken: null, refreshToken: null }),
      localStorage.removeItem('accessToken');
  }


}));
