import { gql } from '@apollo/client';

export const MY_PROFILE_QUERY = gql`
  query MyProfile {
    myProfile {
      name
      avatar
    }
  }
`;
export interface MyProfileData {
  myProfile: {
    name: string;
    avatar: string;
  };
}