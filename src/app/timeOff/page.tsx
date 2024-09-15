"use client";
import React from 'react';
import { useQuery } from '@apollo/client';
import { MY_PROFILE_QUERY } from '@/app/graphql/queries';
import Header from '@/components/Header';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileSidebar from '@/components/ProfileSidebar';
import ProfileCard from '@/components/ProfileCard';

const ProfilePage: React.FC = () => {
  const { loading, error, data } = useQuery(MY_PROFILE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { name, avatar } = data.myProfile;

  return (
    <div>
      <Header userName={name} userAvatar={avatar} />
      <ProfileHeader userName={name} userAvatar={avatar} />
      <div className="flex bg-[#DAE6F2]">
        <ProfileSidebar />
        < ProfileCard />
      </div>
    </div>
  );
};

export default ProfilePage;
