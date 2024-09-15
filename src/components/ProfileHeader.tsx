import React from 'react';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import config from '@/public/images/config.svg'

interface ProfileHeader {
  userName: string;
  userAvatar: string;
}


const ProfileHeader: React.FC<ProfileHeader> = ({ userName, userAvatar }) => {
  const tabs = [
    'Personal',
    'Job',
    'Time Off',
    'Emergency',
    'Documents',
    'Notes',
    'Benefits',
    'Trainings',
    'Assets',
  ];

  return (
    <div className="bg-[#DAE6F2] h-[200px] flex flex-col justify-center px-8 py-4">
      <div className="flex items-center">
        <div className="w-[150px] h-[150px] rounded-full  z-10 ml-12 mr-20">
          <Image
            src={userAvatar}
            alt="Profile Picture"
            width={150}
            height={150}
            className="object-cover rounded-full "
          />
        </div>

        <div className="ml-22 flex-1">
          <h1 className="font-inter text-[28px] ml-3 font-semibold leading-[33.89px] text-black">
            {userName}
          </h1>

          <div className="flex items-center space-x-4 justify-end">
            <button className="w-[162px] h-[33px] px-1 py-[8px] gap-[8px] rounded-tl-[8px] border-2 border-[#7C96B1]  text-black font-inter text-[14px] font-normal leading-[16.94px] flex items-center text-center">
              <span>Request Change</span>
              <FaChevronDown />
            </button>
            <div className='w-[56px] h-[33px] px-1 py-[8px] gap-[8px] rounded-tl-[8px] border-2 border-[#7C96B1] flex items-center text-center text-black'>
              <Image
                src={config}
                alt='config'
                className="rounded-full cursor-pointer  w-5 h-9"
              />
              <FaChevronDown />
            </div>

          </div>
          <div className="flex items-center space-x-4 mt-5 ">
            {tabs.map((tab, index) => (
              <a
                key={index}
                href="#"
                className={`${tab === "Time Off" ? "bg-[#FCFCFE] border-blue-500" : "border-transparent"
                  } text-black hover:text-gray-800 px-3 text-center py-3  border-b-2 hover:border-blue-500 w-[90px] h-[49px]`}
              >
                {tab}
              </a>
            ))}
            <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 cursor-pointer">
              <span>More</span>
              <FaChevronDown />
            </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default ProfileHeader;
