"use client";
import React from 'react';
import { useQuery } from '@apollo/client';
import { MY_PROFILE_QUERY } from '@/app/graphql/queries';
import Header from '@/components/Header';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileSidebar from '@/components/ProfileSidebar';
import ProfileCard from '@/components/ProfileCard';
import { FaSpinner } from 'react-icons/fa';

const ProfilePage: React.FC = () => {
  const { loading, error, data } = useQuery(MY_PROFILE_QUERY);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-gray-500" />
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  const { name, avatar } = data.myProfile;

  return (
    <div>
      <Header userName={name} userAvatar={avatar} />
      <ProfileHeader userName={name} userAvatar={avatar} />
      <div className="flex bg-[#F0F3F8]">
        <ProfileSidebar />
        < ProfileCard />
      </div>
    </div>
  );
};

export default ProfilePage;
